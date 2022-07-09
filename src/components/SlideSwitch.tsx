import { FC } from "react";
import styles from "../styles/SlideSwitch.module.scss";
import { SlideSwitchProps } from "../types/type";

const SlideSwitch: FC<SlideSwitchProps> = ({ isChecked, toggle }) => {
  return (
    <label className={styles.SlideSwitch}>
      <input type="checkbox" checked={isChecked} onChange={() => toggle()} />
      <span className={styles.slider} />
    </label>
  );
};

export default SlideSwitch;
