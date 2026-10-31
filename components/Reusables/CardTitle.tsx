export const CardTitle = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={`card-title text-lg leading-tight ${className}`}>
      {children}
    </h3>
  );
};
