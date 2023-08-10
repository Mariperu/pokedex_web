import Link from "next/link";

type Props = {
  image: string;
};
export const Error = ({ image }: Props) => {
  return (
    <section className="error">
      <h1 className="error__404">404</h1>
      <section
        className="error__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></section>
      <h3 className="error__text">Page not found.</h3>
      <Link href="/" passHref>
        go home
      </Link>
    </section>
  );
};
