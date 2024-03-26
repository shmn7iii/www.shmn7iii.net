export interface TimelineItem {
  title: string;
  when: string;
  url: string | null;
  description: string | null;
}

type TimelineProps = {
  title: string;
  items: TimelineItem[];
};

export default function Timeline({ title, items }: TimelineProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <ol className="relative border-s border-gray-200">
        {items.map((item) => (
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {item.when}
            </time>
            {item.url == null
              ? (
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              )
              : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </a>
              )}
            <p className="mb-4 text-base font-normal text-gray-500">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
