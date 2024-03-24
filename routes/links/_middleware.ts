export function handler() {
  const redirectUrl = Deno.env.get("LINKS_REDIRECT_URL") || "dummy";

  return Response.redirect(redirectUrl, 301);
}
