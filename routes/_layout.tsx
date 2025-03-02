import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Sidebar from "../components/Sidebar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <div class="md:flex justify-center md:pt-64 pt-32 pb-32">
        <Sidebar />

        <main class="px-10">
          <Component />
          <Footer />
        </main>
      </div>

      {/* TODO: Componentに分けたいけどなんか上手くいかん */}
      <a
        class="fixed bottom-[-28px] right-[72px] h-[100px] w-[100px] rounded-full border border-[rgb(45,45,45,0.2)] bg-[#d4ddd7] transition duration-150 ease-in-out hover:translate-y-[5px]"
        href="https://github.com/sttnbnb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="absolute top-[25px] left-[27px] h-[5px] w-[4px] rounded-full bg-black">
        </div>
        <div class="absolute top-[25px] left-[45px] h-[5px] w-[4px] rounded-full bg-black">
        </div>
      </a>

      <a
        class="fixed bottom-[-28px] right-[-10px] h-[100px] w-[100px] rounded-full border border-[rgb(45,45,45,0.2)] bg-[#f7d943] transition duration-150 ease-in-out hover:translate-y-[5px]"
        href="https://github.com/shmn7iii"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="absolute top-[25px] left-[27px] h-[5px] w-[4px] rounded-full bg-black">
        </div>
        <div class="absolute top-[25px] left-[45px] h-[5px] w-[4px] rounded-full bg-black">
        </div>
      </a>
    </>
  );
}
