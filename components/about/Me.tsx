import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import BrandX from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-x.tsx";

export default function Me() {
  return (
    <div className="mb-4">
      <div className="relative mb-8 lg:mb-14">
        <img
          src="/header.jpeg"
          alt="header"
          className="w-full"
        />
        <img
          src="/icon.png"
          alt="shmn7iii icon"
          className="absolute -bottom-4 left-3 w-20 rounded-full ring-2 ring-white md:w-32 lg:-bottom-12"
        />
        <div className="flex justify-end mt-3">
          <a
            href="https://twitter.com/shmn7iii"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <BrandX aria-hidden="true" color="black" />
          </a>
          <a
            href="https://github.com/shmn7iii"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <BrandGithub aria-hidden="true" color="black" />
          </a>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <h3 className="text-2xl font-bold">
          Hayato Shimamura
        </h3>
        <p className="text-xl font-normal text-gray-400">
          @shmn7iii
        </p>
      </div>
      <div className="my-2">
        <p className="text-base font-normal text-gray-500">
          東京生まれ名古屋育ち、今は福岡でエンジニアしてます。
          <br />
          バックエンドが基本でたまにインフラ、ごく稀にフロントを触ります。FinTechが好きです。
        </p>
      </div>
    </div>
  );
}
