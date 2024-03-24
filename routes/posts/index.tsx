export default function Index() {
  const redirectUrl = Deno.env.get("BLOG_REDIRECT_URL") + "/posts";

  return (
    <span>
      This page will redirect to{" "}
      <a href={redirectUrl} className="underline">{redirectUrl}</a>.
    </span>
  );
}
