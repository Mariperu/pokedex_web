import Link from "next/link";

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  const image = "/assets/logo.webp";

  return (
    <section className={className}>
      <section style={{ backgroundImage: `url(${image})` }}></section>
    </section>
  );
};
