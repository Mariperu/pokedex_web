import { ReactNode } from "react";
import { HeadContent } from "./../../components";
import { Footer } from "@/components/Footer";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  og_description: string;
  keywords: string;
};

export const BasicLayout = (props: Props) => {
  return (
    <div className="basicLayout">
      <HeadContent
        title={props.title}
        description={props.description}
        og_description={props.og_description}
        keywords={props.keywords}
      />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
