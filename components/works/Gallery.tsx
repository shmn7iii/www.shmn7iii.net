import Axe from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/axe.tsx";
import ArrowUpRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/arrow-up-right.tsx";

export interface GalleryItem {
  title: string;
  url: string | null;
  github: string | null;
  tag: string[];
  description: string;
}

type GalleryProps = {
  items: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((item) => (
        <div className="flex items-start">
          <div className="w-fit">
            <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -start-3 ring-8 ring-white ">
              <Axe
                size={16}
                color={item.tag.includes("Archived") ? "gray" : "black"}
              />
            </span>
          </div>

          <div className="ms-2">
            <div className="flex items-center mb-1">
              {item.url
                ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="flex items-center text-lg font-semibold text-gray-900">
                      {item.title}
                      <span className="ms-1 text-blue-600">
                        <ArrowUpRight size={20} />
                      </span>
                    </h3>
                  </a>
                )
                : (
                  <h3 className="flex items-center text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                )}
              {item.tag.map((tag) => (
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded ms-3">
                  {tag}
                </span>
              ))}
            </div>

            {item?.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >
                {item.github}
              </a>
            )}

            <p className="mb-4 text-base font-normal text-gray-500">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
