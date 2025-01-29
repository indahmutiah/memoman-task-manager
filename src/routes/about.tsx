export function About() {
  return (
    <div>
      <div className="border-b border-gray-200">
        <h2 className="text-2xl font-bold p-4">About</h2>
      </div>

      <p className="p-4">
        This is a simple task manager app that allows you to create, edit, and
        delete tasks. It also has a feature to add a memo to a task. The app
        uses React, Tailwind CSS, TypeScript, and shadcn. I hope you enjoy using
        this app and find it useful.
        <br />
        <div className="flex flex-row gap-4 py-6 border-b border-gray-200">
          <h2 className="text-xl font-bold">Version 1.0 🚀 </h2>
        </div>
        <p>
          The app first release was made in 2025. Available on{" "}
          <a
            href="https://github.com/indahmutiah/memoman-task-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub
          </a>{" "}
          since 2025. The app is still in development and there are many
          features that need to be added.
        </p>
        <div className="flex flex-row gap-4 py-8">
          <p>Greetings from the creator of this app, Enjoy!</p>
        </div>
        <div className="flex flex-row gap-4 py-4">
          <a
            href="https://www.linkedin.com/in/indah-mutiah-utami-mz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Indah Mutiah MZ
          </a>
        </div>
      </p>
    </div>
  );
}
