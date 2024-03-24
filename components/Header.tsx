import MoodSmile from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/mood-smile.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Blog ↗︎", href: "https://blog.shmn7iii.net" },
  ];

  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <a href="/">
          <div className="flex items-center gap-1">
            <MoodSmile aria-hidden="true" />
            <div className="text-2xl ml-1 font-bold">
              www.shmn7iii.net
            </div>
          </div>
        </a>
        <ul className="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                className={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
