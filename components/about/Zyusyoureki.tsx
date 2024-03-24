import Timeline from "./Timeline.tsx";

export default function Zyusyoureki() {
  const zyusyoureki = [
    {
      when: "March 2024",
      title: "電子情報通信学会 九州支部 「成績優秀賞」",
      url: "https://www.ieice.org/kyushu/siseki2023/",
      description: "主席卒業に際し成績優秀者として受賞しました。",
    },
    {
      when: "March 2024",
      title: "近畿大学産業理工学部 「学部長賞」",
      description: "成績優秀者として表彰されました。",
    },
    {
      when: "January 2024",
      title: "第16回フクオカRuby大賞 「奨励賞」（※研究室名義）",
      url: "https://www.digitalfukuoka.jp/topics/255",
      description:
        "SITE研究会で発表した提案に基づいた参照実装をRubyを用いて作成し研究室名義で応募しました。",
    },
    {
      when: "November 2023",
      title: "電子情報通信学会 SITE研究会 「第20回 学術奨励賞」",
      url: "https://www.ieice.org/ess/site/site_award-html",
      description:
        "11月10日に行われた県立広島大学でのSITE研究会にて、「パブリック型ブロックチェーン上の法規制可能なステーブルコインの提案」と題した発表を行い、学術奨励賞をいただきました。",
    },
    {
      when: "November 2022",
      title: "B3 -Blockchain Bootcamp & Business Plan Contest- 「優秀賞」",
      url: "https://x.com/shmn7iii/status/1586323808956260352",
      description:
        "10月29日に行われた本審査にて、「Dチーム」として参加し作成したビジネスプラン「monoiroha」が優秀賞を受賞しました。チームでは主にデモの作成主導を担当しました。",
    },
    {
      when: "January 2022",
      title: "第14回フクオカRuby大賞 「学生賞（マネーフォワード賞）」",
      url: "https://www.digitalfukuoka.jp/topics/187?locale=ja",
      description:
        "1月21日に行われた審査会において、「Tap!」が学生賞（マネーフォワード賞）を受賞しました。",
    },
    {
      when: "December 2021",
      title:
        "九州アプリチャレンジキャラバン2021 「優秀賞・NECソリューションイノベータ賞」",
      url: "https://challecara.org/?page_id=2564",
      description:
        "12月11日に行われたコンテストにおいて、優秀賞とNECソリューションイノベータ賞のダブル受賞を果たしました。チーム「秋元としまむら」として5月から参加し、NFTの発行管理プラットフォーム「Tap!」を制作しました。審査員講評では、NFTのデータストレージにIPFSを採用しブロックチェーンのストレージ問題を解決したことに高い評価を頂きました。",
    },
  ];

  return <Timeline title="受賞歴" items={zyusyoureki} />;
}
