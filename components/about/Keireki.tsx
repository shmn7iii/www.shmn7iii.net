import Timeline from "./Timeline.tsx";
import keirekis from "../../data/about/keireki.json" with { type: "json" };

export default function Keireki() {
  return <Timeline title="経歴" items={keirekis} />;
}
