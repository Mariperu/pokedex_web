import Link from "next/link";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  const image = "/assets/logo.png";

  return (
    <section className={className}>
      <Link href="/" passHref>
        <section style={{ backgroundImage: `url(${image})` }}></section>
      </Link>
    </section>
  );
};
