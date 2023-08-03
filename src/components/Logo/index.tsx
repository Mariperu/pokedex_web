import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <section className="logo">
      <Link href="/" passHref>
        <section>
          <Image
            src="/assets/logo.png"
            alt="logo"
            priority={true}
            width={160}
            height={60}
            className={className}
          ></Image>
        </section>
        <section>
          <Image
            src="/assets/pokeball.png"
            alt="logo"
            priority={true}
            width={50}
            height={50}
            className={className}
          ></Image>
        </section>
      </Link>
    </section>
  );
};
