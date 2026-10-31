export const Label = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.3em] text-primary ${className}`}
    >
      {children}
    </p>
  );
};
