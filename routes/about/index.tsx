import Keireki from "../../components/about/Keireki.tsx";
import Me from "../../components/about/Me.tsx";
import Zyusyoureki from "../../components/about/Zyusyoureki.tsx";

export default function Index() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Me />
      <Keireki />
      <Zyusyoureki />
    </div>
  );
}
