import Title from "../components/Title.tsx";

export default function Home() {
  return (
    <div class="">
      <Title str="Hayato Shimamura" />

      {/* TODO: こういうのコンポーネントにできるのかな、分からん。ブロック引数みたいに渡したい。 */}
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
  );
}
