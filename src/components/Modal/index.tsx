import { ReactNode } from "react";
import UseDisableScroll from "../../hooks/UseDisableScroll";

type ModalType = {
  children: ReactNode;
  isOpen?: boolean;
  onHandleClose: (e: any) => void;
};

export default function Modal(props: ModalType) {
  if (!props.isOpen) {
    UseDisableScroll({ element: document.body, disabled: false });
    return null;
  } else {
    UseDisableScroll({ element: document.body, disabled: true });
  }
  return (
    <section className="modal" onClick={props.onHandleClose}>
      <section className="modal__box" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </section>
    </section>
  );
}
