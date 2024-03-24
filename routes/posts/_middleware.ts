export function handler(req: Request) {
  const requestUrl = new URL(req.url);
  const redirectUrl = Deno.env.get("BLOG_REDIRECT_URL") + requestUrl.pathname;

  return Response.redirect(redirectUrl, 307);
}
