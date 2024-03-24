import { PageProps } from "$fresh/server.ts";

export default function Slug(props: PageProps) {
  const { slug } = props.params;
  const redirectUrl = Deno.env.get("BLOG_REDIRECT_URL") + "/posts/" + slug;

  return (
    <span>
      This page will redirect to{" "}
      <a href={redirectUrl} className="underline">{redirectUrl}</a>.
    </span>
  );
}
