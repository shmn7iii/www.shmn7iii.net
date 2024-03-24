import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import BrandX from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-x.tsx";

export default function Me() {
  return (
    <div className="mb-6">
      <div className="relative mb-12">
        <img
          src="/header.jpeg"
          alt="header"
          className="w-full"
        />
        <img
          src="/icon.png"
          alt="shmn7iii icon"
          className="absolute -bottom-12 left-3 w-20 rounded-full ring-2 ring-white lg:w-32"
        />
        <div className="flex justify-end mt-3 me-3">
          <a
            href="https://twitter.com/shmn7iii"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <BrandX aria-hidden="true" color="black" />
          </a>
          <a
            href="https://github.com/shmn7iii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandGithub aria-hidden="true" color="black" />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
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
