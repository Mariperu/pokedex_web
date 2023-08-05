import { useEffect } from "react";

type Props = {
  element: any;
  disabled: boolean;
};

export default function UseDisableScroll({ element, disabled }: Props) {
  useEffect(() => {
    if (!element) {
      return;
    }
    element.style.overflowY = disabled ? "hidden" : "scroll";
    return () => {
      element.style.overflowY = "scroll";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);
}
