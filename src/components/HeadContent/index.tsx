import Head from "next/head";

type Props = {
  title: string;
  description: string;
  og_description: string;
  keywords: string;
};

export function HeadContent({
  title,
  description,
  og_description,
  keywords,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="name" content="Pokedex" />
      <meta name="description" content={description} />
      <meta property="og:title" content="Pokedex" />
      <meta property="og:description" content={og_description} />
      <meta property="og:url" content="https://pokedex-web-navy.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Maritza Rodriguez" />
    </Head>
  );
}
