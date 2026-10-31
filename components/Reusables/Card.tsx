export const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`card flex flex-col border border-base-content/10 bg-base-300/50 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};
