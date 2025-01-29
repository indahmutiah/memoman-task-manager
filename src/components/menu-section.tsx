import { IoHome } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { NavLink } from "react-router";
import { data } from "@/data/data";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function MenuSection() {
  return (
    <section className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
      <nav className="mt-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
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
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <FaCalendarCheck className="inline-block mr-2" />
                Memo
                <NavigationMenuContent>
                  <ul className="bg-white shadow-lg rounded-md p-4">
                    {data.map((memo) => (
                      <li key={memo.id} className="mb-2">
                        <NavLink
                          to={`/memo-details/${memo.id}`}
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 text-lg text-white bg-yellow-800 rounded-md"
                              : "block px-4 py-2 text-lg text-black hover:bg-yellow-800 rounded-md hover:text-white"
                          }
                        >
                          {memo.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </nav>
    </section>
  );
}
