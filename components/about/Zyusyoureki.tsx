import Timeline from "./Timeline.tsx";
import zyusyourekis from "../../data/about/zyusyoureki.json" with {
  type: "json",
};

export default function Zyusyoureki() {
  return <Timeline title="受賞歴" items={zyusyourekis} />;
}
