export default function Index() {
  const redirectUrl = Deno.env.get("LINKS_REDIRECT_URL") || "dummy";

  return (
    <span>
      This page will redirect to{" "}
      <a href={redirectUrl} className="underline">{redirectUrl}</a>.
    </span>
  );
}
