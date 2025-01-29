import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router";
import { FaCalendarCheck } from "react-icons/fa";

export function MenuSection() {
  return (
    <section className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
      <nav className="mt-6">
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-lg text-white bg-background rounded-md"
                  : "block px-4 py-2 text-lg text-black hover:bg-background rounded-md hover:text-white"
              }
            >
              <IoHome className="inline-block mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-lg text-white bg-background rounded-md"
                  : "block px-4 py-2 text-lg text-black hover:bg-background rounded-md hover:text-white"
              }
            >
              <FaCalendarCheck className="inline-block mr-2" />
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
