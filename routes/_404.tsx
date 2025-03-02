import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="">
        {/* タイトル */}
        <div class="pt-2">
          <p class="font-josefinsans font-bold text-2xl text-[#2d2d2d]">404</p>
        </div>

        {/* テキスト */}
        <div class="grid gap-2 md:w-[618px] max-w-[618px] font-mono font-thin text-base text-wrap text-[#2d2d2d]">
          <br/>
          <p>Page not found.</p>
        </div>
      </div>
    </>
  );
}
