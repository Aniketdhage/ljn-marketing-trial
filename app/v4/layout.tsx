import "./v4.css";

export default function V4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="v4-theme min-h-screen">
      {children}
    </div>
  );
}
