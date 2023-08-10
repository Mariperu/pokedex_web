import { ReactNode, useState, useEffect } from "react";
import { HeadContent } from "./../../components";
import { Footer } from "@/components/Footer";
import { Loading } from "@/components/Loading";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  og_description: string;
  keywords: string;
};

export const BasicLayout = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, [loading]);

  if (loading) {
    return <Loading active={loading} />;
  } else {
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
  }
};
