export default function Home() {
  return (
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
          <div class="">
            {/* タイトル */}
            <div class="pt-2">
              <p class="font-josefinsans font-bold text-2xl text-[#2d2d2d]">Hayato Shimamura</p>
            </div>

            {/* テキスト */}
            <div class="grid gap-2 md:w-[618px] max-w-[618px] font-mono font-thin text-base text-wrap text-[#2d2d2d]">
              <br/>
              <p>I am a software engineer in Fukuoka, Japan. Currently, I'm working at a FinTech company and developing a payment service with Ruby on Rails.</p>
              <p>I learned computer science at Kindai University and did research on blockchain, especially Bitcoin and stablecoin.</p>
              <p>Syumi de kamera yattari suruyo.</p>
              <br/>
              <p>Links</p>
              <p class="underline underline-offset-4"><a href="https://blog.shmn7iii.net/">Kaikioki (Tech blog)</a></p>
              <p class="underline underline-offset-4"><a href="https://honjitsu.shmn7iii.net/">Honjitsu (Daily blog)</a></p>
            </div>
          </div>

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
  );
}
