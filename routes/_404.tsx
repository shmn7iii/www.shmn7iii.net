import { Head } from "$fresh/runtime.ts";
import Title from "../components/Title.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="">
        <Title str="404" />

        <div class="grid gap-2 md:w-[618px] max-w-[618px] font-mono font-thin text-base text-wrap text-[#2d2d2d]">
          <br />
          <p>Page not found.</p>
        </div>
      </div>
    </>
  );
}
