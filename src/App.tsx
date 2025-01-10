export function App() {
  return (
    <>
      <header className="bg-yellow-900 text-white p-4">
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

      <main className="flex flex-col md:flex-row h-screen">
        <section className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
          <div className="flex flex-col gap-4">...</div>
        </section>

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <h1 className="text-2xl font-bold">
            Welcome to Memoman Task Manager
          </h1>
        </section>
      </main>
    </>
  );
}
