export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-red-600 h-40 w-full"></nav>
      <header className="w-full h-60 bg-green-600"></header>
      <main className="h-screen bg-blue-600">{children}</main>
    </>
  );
}
