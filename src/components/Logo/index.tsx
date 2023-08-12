import Data from "./../../pages/api/data.json";
type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  return (
    <section className={className}>
      <section style={{ backgroundImage: `url(${Data.logo_image})` }}></section>
    </section>
  );
};
