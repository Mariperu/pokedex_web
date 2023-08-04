import Link from "next/link";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { ScrollIdentifier } from "@/hooks/ScrollIdentifier";

export const FloatingButton = () => {
  const showButton = ScrollIdentifier(300);

  return (
    <>
      {showButton && (
        <section className="floating-button">
          <section>
            <Link href="/">
              <IoIosArrowDropupCircle />
            </Link>
          </section>
        </section>
      )}
    </>
  );
};
