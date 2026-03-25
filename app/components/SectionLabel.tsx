export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 font-display text-[10px] font-bold tracking-[0.25em] uppercase text-[#229bb3] mb-5">
      {children}
      <span className="block w-10 h-px bg-[#229bb3]" />
    </div>
  );
}
