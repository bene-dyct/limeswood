"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop
 *
 * WHY THIS IS NEEDED:
 * Next.js 13+ App Router uses React's concurrent rendering. When you navigate
 * to a new page, the new page component mounts while the browser may still be
 * at a scrolled position from the previous page. Next.js then tries to scroll
 * to the top, but because this happens AFTER the paint, you see the page
 * visibly scrolling upward.
 *
 * This component listens for pathname changes and immediately calls
 * window.scrollTo with behavior: "instant" (no animation) BEFORE the browser
 * has a chance to do its own animated scroll. This makes every page open
 * cleanly at the top with zero visible scroll movement.
 *
 * HOW TO USE:
 * Import and render this once inside your root app/layout.tsx, inside the
 * <body> tag, alongside your Navbar and page content. It renders nothing
 * visible — it only runs the side effect.
 *
 * Example layout.tsx:
 *
 *   import ScrollToTop from "@/app/components/ScrollToTop";
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="en">
 *         <body>
 *           <ScrollToTop />
 *           <Navbar />
 *           {children}
 *         </body>
 *       </html>
 *     );
 *   }
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // "instant" skips any smooth-scroll animation — the page just appears at top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Renders nothing — purely a side-effect component
  return null;
}
