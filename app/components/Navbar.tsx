"use client";

/**
 * app/components/Navbar.tsx
 *
 * Stack  : Next.js 16 (App Router) · React 19 · TypeScript strict
 *          TailwindCSS v4 · Framer Motion 12 · react-icons v5
 *
 * ── Colour logic ────────────────────────────────────────────────────────────
 *
 *  There are three states that control link colour:
 *
 *  1. FORCE-DARK pages  (about, services, get-a-quote, etc.)
 *     These pages have a white/light background that starts at the very top.
 *     White text would be invisible. So on these pages we ALWAYS show dark
 *     text, regardless of scroll position.
 *     → Implemented via the DARK_TEXT_PAGES constant below.
 *     → To add more pages simply add their pathname prefix to the array.
 *
 *  2. Scrolled state (any page scrolled past 100 vh)
 *     The navbar gets a frosted-glass white background → dark text.
 *
 *  3. Default (hero pages at top)
 *     Transparent background → white text.
 *
 *  The derived boolean `useDarkText` unifies cases 1 and 2 so every
 *  sub-component only needs to check one flag.
 *
 * ── Other behaviour ──────────────────────────────────────────────────────────
 *  • Fixed, z-[9999]
 *  • Hides on scroll-down, reappears on scroll-up (rAF-throttled, 5 px dead-zone)
 *  • Active link  → green text + underline (full-width, persistent)
 *  • Hovered link → green text + underline animates left → right
 *  • Services: hover dropdown (desktop), accordion (mobile)
 *  • Hamburger for mobile/tablet
 *  • Zero hydration errors (all state initialised as false)
 *  • All menus close on every pathname change
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown, MdMenu, MdMenuOpen } from "react-icons/md";

// ─── Pages that always need dark (black) navbar text ─────────────────────────
//
// Add any pathname prefix here and the navbar will automatically switch to
// dark text on that page — even before the user scrolls.
//
// Pages whose background is white/light right from the very top of the page.
// Any pathname listed here (exact match OR sub-path) forces the navbar into
// dark-text mode before the user scrolls.
//
// IMPORTANT: "/services" is NOT in this list because the service sub-pages
// (/services/automation, /services/electrical, etc.) have hero images and
// should display the home-page transparent navbar style.
// The main /services index page IS handled separately via EXACT_DARK_PAGES.
const DARK_TEXT_PAGES: string[] = [
  "/about",
  "/quote",
  "/profile",
  "/blog",
  "/consultation",
];

// Pages that need dark text only on an exact pathname match — not their children.
// "/services" goes here so only /services itself is dark, not /services/automation etc.
const EXACT_DARK_PAGES: string[] = [
  "/services",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Profile", href: "/profile" },
  // "Services" rendered separately — has dropdown
  { label: "Blog", href: "/blog" },
];

const SERVICE_LINKS: NavItem[] = [
  { label: "Automation Services", href: "/services/automation" },
  { label: "Electrical Engineering Services", href: "/services/electrical" },
  {
    label: "Instrumentation & Control Services",
    href: "/services/instrumentation",
  },
  { label: "Manpower, Management and Development", href: "/services/manpower" },
  { label: "Mechanical Engineering Services", href: "/services/mechanical" },
];

// ─── Framer Motion variants ───────────────────────────────────────────────────

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.16, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.12, ease: "easeIn" as const },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto" as const,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto" as const,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * DesktopNavLink
 *
 * Colour sits DIRECTLY on the <Link> element (renders the <a> tag).
 * Setting colour on a parent wrapper is unreliable — the browser resolves
 * <a> colour independently of its ancestors in many contexts.
 *
 * Props:
 *   darkText — true  → use dark (gray-800) base colour
 *              false → use white base colour
 */
function DesktopNavLink({
  item,
  active,
  darkText,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  darkText: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={[
        "relative group inline-block  font-semibold tracking-wide",
        "transition-colors duration-200",
        active
          ? "text-[#3a5c6a]"
          : darkText
            ? "text-gray-800 hover:text-[#229bb3]"
            : "text-white hover:text-[#229bb3]",
      ].join(" ")}
    >
      {item.label}
      {/* Animated underline — full-width when active, slides in on hover */}
      <span
        className={[
          "absolute left-0 -bottom-1 h-[2px] bg-[#229bb3]",
          "transition-all duration-300 ease-out",
          active ? "w-full" : "w-0 group-hover:w-full",
        ].join(" ")}
      />
    </Link>
  );
}

/**
 * DropdownItem
 *
 * Colour on <Link> itself — NOT on the parent <li> or <ul>.
 * The parent <ul> carries NO text-colour class to avoid overriding children.
 */
function DropdownItem({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li role="none">
      <Link
        href={item.href}
        role="menuitem"
        onClick={onClick}
        className={[
          "relative group block px-5 py-2.5  font-medium",
          "whitespace-nowrap transition-colors duration-200",
          active
            ? "text-[#3a5c6a] font-semibold"
            : "text-gray-700 hover:text-[#229bb3]",
        ].join(" ")}
      >
        {item.label}
        <span
          className={[
            "absolute left-5 bottom-1.5 h-[2px] bg-[#229bb3]",
            "transition-all duration-300 ease-out",
            active
              ? "w-[calc(100%-40px)]"
              : "w-0 group-hover:w-[calc(100%-40px)]",
          ].join(" ")}
        />
      </Link>
    </li>
  );
}

/** MobileNavLink — full-width item inside the mobile drawer. */
function MobileNavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={[
        "block px-6 py-3  font-semibold",
        "border-b border-white/10 transition-colors duration-200",
        active ? "text-[#229bb3]" : "text-[#3a5c6a] hover:text-[#229bb3]",
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname() ?? "/";

  // ── All state initialised as false for hydration safety ─────────────────────
  //    - scrolled is derived from window.scrollY, but must be false during SSR.
  const [scrolled, setScrolled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > window.innerHeight;
  });
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [desktopDropdown, setDesktopDropdown] = useState<boolean>(false);
  const [mobileAccordion, setMobileAccordion] = useState<boolean>(false);

  const lastScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // ── Derived colour flag ──────────────────────────────────────────────────────
  //
  // useDarkText is true when EITHER:
  //   a) the current page is in DARK_TEXT_PAGES (white-bg pages), OR
  //   b) the user has scrolled past 100 vh on any page.
  //
  // This single boolean is the only thing sub-components need to check.
  //
  // isLightBgPage is true when the current page should force dark navbar text:
  //   • DARK_TEXT_PAGES  — exact match OR any sub-path (e.g. /about/team)
  //   • EXACT_DARK_PAGES — exact match ONLY (e.g. /services but NOT /services/automation)
  const isLightBgPage =
    DARK_TEXT_PAGES.some(
      (prefix) => pathname === prefix || pathname.startsWith(prefix + "/"),
    ) || EXACT_DARK_PAGES.includes(pathname);
  const useDarkText = isLightBgPage || scrolled;

  // ── rAF-throttled scroll handler ────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const y = window.scrollY;
      const threshold = window.innerHeight; // 100 vh

      setScrolled(y > threshold);

      if (y <= 0) {
        setNavVisible(true);
      } else if (y < lastScrollY.current) {
        // Scrolling UP → show
        setNavVisible(true);
      } else if (y > lastScrollY.current + 5) {
        // Scrolling DOWN (5 px dead-zone) → hide
        setNavVisible(false);
        setDesktopDropdown(false);
      }

      lastScrollY.current = y;
      ticking.current = false;
    });
  }, []);

  // Register scroll listener after mount
  useEffect(() => {
    const y = window.scrollY;
    lastScrollY.current = y;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
  const sync = () => setScrolled(window.scrollY > window.innerHeight);
  sync();

  window.addEventListener("scroll", sync, { passive: true });
  return () => window.removeEventListener("scroll", sync);
}, []);

  // Close all menus on route change
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMobileOpen(false);
    setDesktopDropdown(false);
    setMobileAccordion(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServicesActive = pathname.startsWith("/services");

  // ── Background style ─────────────────────────────────────────────────────────
  //
  // On light-bg pages: always show a clean white/semi-white bar so the nav
  // doesn't appear to float invisibly over the page content.
  // On hero pages at top: transparent.
  // On hero pages scrolled: frosted glass.
  //
  const headerBg = isLightBgPage
    ? "bg-white/95 backdrop-blur-sm shadow-sm border-gray-100"
    : scrolled
      ? "bg-white/85 backdrop-blur-md shadow-sm border-gray-200/50"
      : "bg-transparent";

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <motion.header
      initial={false}
      animate={{ y: navVisible ? "0%" : "-110%" }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-[9999]",
        "transition-all duration-300",
        headerBg,
      ].join(" ")}
      role="banner"
    >
      {/* ── Inner container ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 md:text-[16px]">
          {/* Logo */}
          <Link
            href="/"
            
          >
            <Image
              src="/LIMESWOOD-LOGO-.png"
              alt="Limeswood International"
              width={60}
              height={60}
              priority
              className="h-15 w-15 object-contain"
            />
          </Link>

          {/* ── Desktop navigation ── */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Primary navigation"
          >
            {/* Home · About · Profile */}
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <DesktopNavLink
                key={item.href}
                item={item}
                active={isActive(item.href)}
                darkText={useDarkText}
              />
            ))}

            {/* Services with dropdown */}
            <li
              ref={dropdownRef}
              className="relative list-none"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              {/* Trigger: <Link> + chevron as siblings — never <button><Link> */}
              <div className="flex items-center gap-0.5 cursor-pointer">
                <Link
                  href="/services"
                  className={[
                    "relative group inline-block  font-semibold tracking-wide",
                    "transition-colors duration-200",
                    isServicesActive
                      ? "text-[#3a5c6a]"
                      : useDarkText
                        ? "text-gray-800 hover:text-[#229bb3]"
                        : "text-white hover:text-[#229bb3]",
                  ].join(" ")}
                >
                  Services
                  <span
                    className={[
                      "absolute left-0 -bottom-1 h-[2px] bg-[#229bb3]",
                      "transition-all duration-300 ease-out",
                      isServicesActive ? "w-full" : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </Link>

                <motion.span
                  animate={{ rotate: desktopDropdown ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={[
                    "flex items-center leading-none",
                    isServicesActive
                      ? "text-[#3a5c6a]"
                      : useDarkText
                        ? "text-[#3a5c6a]"
                        : "text-white",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <MdKeyboardArrowDown className="text-xl" />
                </motion.span>
              </div>

              {/* Dropdown — NO text colour on the <ul> */}
              <AnimatePresence>
                {desktopDropdown && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    role="menu"
                    aria-label="Services submenu"
                    className={[
                      "absolute top-full left-1/2 -translate-x-1/2 mt-3",
                      "bg-white rounded-xl shadow-xl border border-gray-100",
                      "py-2 min-w-max z-50",
                    ].join(" ")}
                  >
                    {SERVICE_LINKS.map((s) => (
                      <DropdownItem
                        key={s.href}
                        item={s}
                        active={pathname === s.href}
                        onClick={() => setDesktopDropdown(false)}
                      />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Blog */}
            <DesktopNavLink
              item={NAV_ITEMS[3]}
              active={isActive("/blog")}
              darkText={useDarkText}
            />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/quote"
              className={[
                "inline-flex items-center justify-center",
                "h-11 px-6 rounded-xl  font-semibold",
                "bg-[#229bb3] text-white",
                "hover:bg-[#1a7d91] active:scale-95",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229bb3]",
              ].join(" ")}
            >
              Get a Quote
            </Link>
          </div>

          {/* Hamburger (mobile / tablet) */}
          <button
            type="button"
            className={[
              "lg:hidden flex items-center justify-center",
              "w-10 h-10 rounded-lg transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500",
              useDarkText
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10",
            ].join(" ")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <MdMenuOpen className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-sm shadow-md border-t border-gray-200"
          >
            <div className="flex flex-col pb-2">
              {NAV_ITEMS.slice(0, 3).map((item) => (
                <MobileNavLink
                  key={item.href}
                  item={item}
                  active={isActive(item.href)}
                  onClick={() => setMobileOpen(false)}
                />
              ))}

              {/* Services accordion */}
              <div className="border-b border-white/10">
                <button
                  type="button"
                  className={[
                    "flex items-center justify-between w-full",
                    "px-6 py-3  font-semibold transition-colors duration-200",
                    isServicesActive
                      ? "text-[#3a5c6a]"
                      : "text-[#3a5c6a] hover:text-[#229bb3]",
                  ].join(" ")}
                  onClick={() => setMobileAccordion((v) => !v)}
                  aria-expanded={mobileAccordion}
                  aria-controls="mobile-services-list"
                >
                  <span>Services</span>
                  <motion.span
                    animate={{ rotate: mobileAccordion ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <MdKeyboardArrowDown className="text-xl" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileAccordion && (
                    <motion.ul
                      id="mobile-services-list"
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden bg-white/5"
                      role="menu"
                    >
                      {SERVICE_LINKS.map((s) => (
                        <li key={s.href} role="none">
                          <Link
                            href={s.href}
                            role="menuitem"
                            onClick={() => setMobileOpen(false)}
                            className={[
                              "block px-8 py-2.5  font-medium",
                              "border-b border-white/5 transition-colors duration-200",
                              pathname === s.href
                                ? "text-[#229bb3] font-semibold"
                                : "text-[#3a5c6a] hover:text-[#229bb3]",
                            ].join(" ")}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <MobileNavLink
                item={NAV_ITEMS[3]}
                active={isActive("/blog")}
                onClick={() => setMobileOpen(false)}
              />

              {/* Mobile CTA */}
              <div className="px-6 pt-4 pb-2">
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "flex items-center justify-center w-full",
                    "h-11 rounded-xl  font-bold",
                    "bg-[#229bb3] text-white",
                    "hover:bg-[#1a7d91] active:scale-95",
                    "transition-all duration-200",
                  ].join(" ")}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}