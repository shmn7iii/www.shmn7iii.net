import Gallery from "../../components/works/Gallery.tsx";
import Heading from "../../components/works/Heading.tsx";
import works from "../../data/works/data.json" with { type: "json" };

export default function Index() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Heading />
      <Gallery items={works} />
    </div>
  );
}
