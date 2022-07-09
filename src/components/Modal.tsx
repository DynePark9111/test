import { FC } from "react";
import styles from "../styles/Modal.module.scss";
import { ModalProps } from "../types/type";

const Modal: FC<ModalProps> = ({ isOpen, toggle, children }) => {
  return (
    <div
      className={styles.Modal}
      id={isOpen ? styles.show : ""}
      onClick={() => toggle()}
    >
      {children}
    </div>
  );
};

export default Modal;
