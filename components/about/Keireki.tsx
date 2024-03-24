import Timeline from "./Timeline.tsx";

export default function Keireki() {
  const keireki = [
    {
      when: "2020 - 2024",
      title: "近畿大学産業理工学部 情報学科",
      description: "情報系です。ブロックチェーンを研究しました。",
    },
    {
      when: "2017 - 2020",
      title: "名城大学附属高等学校 普通科",
      description: "理系です。",
    },
  ];

  return <Timeline title="経歴" items={keireki} />;
}
