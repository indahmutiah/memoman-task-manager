import { IoHome } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";


export function MenuSection() {
  return (
    <section className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
      <nav className="mt-6">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="/"
              className="block px-4 py-2 text-lg text-black hover:bg-yellow-800 rounded-md hover:text-white"
            >
                <IoHome className="inline-block mr-2" />
                Home
            </a>
          </li>
          <li>
            <a
              href="/memo"
              className="block px-4 py-2 text-lg text-black hover:bg-yellow-800 rounded-md hover:text-white"
            >
                <FaCalendarCheck className="inline-block mr-2" />
                Memo
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
