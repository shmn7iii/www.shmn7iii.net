import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  const url = Deno.env.get("DEPLOY_URL");
  const ogpImage = Deno.env.get("DEPLOY_URL") + "/ogp.png";
  const title = "www.shmn7iii.net";
  const description = "A portfolio site.";

  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={ogpImage} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogpImage} />

        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
