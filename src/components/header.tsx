
export function Header() {
  return (
    <header className="bg-background text-white p-4">
      <a href="/" className="flex items-center text-xl font-bold">
        <img
          src="/images/logo.png"
          alt="logo"
          className="mr-4 rounded-md"
          width="50"
          height="50"
        />
        Memoman
      </a>
    </header>
  );
}
