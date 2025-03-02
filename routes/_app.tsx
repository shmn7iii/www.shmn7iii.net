import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  const url = Deno.env.get("DEPLOY_URL");
  const ogpImage = Deno.env.get("DEPLOY_URL") + "/ogp.png";
  const title = "www.shmn7iii.net";
  const description = "A portfolio site.";

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={ogpImage} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogpImage} />

        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#e3ded2]">
        <div class="md:pt-64 pt-32 pb-32">
          {/* 横並びBOX */}
          <div class="md:flex justify-center">

            {/* サイドバー */}
            <aside class="px-10">
              {/* ロゴ */}
              <div class="w-fit pt-2 px-4 mb-6 bg-[#2d2d2d]">
                <p class="font-josefinsans font-medium text-2xl text-[#e3ded2]">shmn7iii.net</p>
              </div>
            </aside>

            {/* メイン */}
            <main class="px-10">
              <Component />

              {/* フッター */}
              <footer class="flex justify-between content-center mt-24 mb-8 font-mono font-thin text-sm text-[#797979]">
                <p class="">© 2025 shmn7iii.net</p>
                <div class="flex gap-1">
                  <a href="https://x.com/shmn7iii" target="_blank" rel="noopener noreferrer">X</a>
                  <p>・</p>
                  <a href="https://www.instagram.com/shmn7iii/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <p>・</p>
                  <a href="https://github.com/shmn7iii" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </footer>
            </main>
          </div>

          {/* さてつくん */}
          <a class="fixed bottom-[-28px] right-[72px] h-[100px] w-[100px] rounded-full border border-[rgb(45,45,45,0.2)] bg-[#d4ddd7] transition duration-150 ease-in-out hover:translate-y-[5px]"
            href="https://github.com/sttnbnb" target="_blank" rel="noopener noreferrer">
            <div class="absolute top-[25px] left-[27px] h-[5px] w-[4px] rounded-full bg-black"></div>
            <div class="absolute top-[25px] left-[45px] h-[5px] w-[4px] rounded-full bg-black"></div>
          </a>

          {/* まんないくん */}
          <a class="fixed bottom-[-28px] right-[-10px] h-[100px] w-[100px] rounded-full border border-[rgb(45,45,45,0.2)] bg-[#f7d943] transition duration-150 ease-in-out hover:translate-y-[5px]"
            href="https://github.com/shmn7iii" target="_blank" rel="noopener noreferrer">
            <div class="absolute top-[25px] left-[27px] h-[5px] w-[4px] rounded-full bg-black"></div>
            <div class="absolute top-[25px] left-[45px] h-[5px] w-[4px] rounded-full bg-black"></div>
          </a>
        </div>
      </body>
    </html>
  );
}
