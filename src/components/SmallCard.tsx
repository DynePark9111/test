import styles from "../styles/SmallCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceDizzy,
  faFaceFrown,
  faFaceGrinBeamSweat,
  faFaceGrinStars,
  faFaceLaugh,
  faFaceLaughSquint,
  faFaceMeh,
  faFaceSmile,
  faFaceTired,
} from "@fortawesome/free-regular-svg-icons";
import { FC } from "react";
import { SmallCardProps } from "../types/type";
import Loading from "./Loading";

const SmallCard: FC<SmallCardProps> = ({ title, level, value, isLoading }) => {
  const Icon = {
    0: <FontAwesomeIcon icon={faFaceGrinBeamSweat} />,
    1: <FontAwesomeIcon icon={faFaceGrinStars} />,
    2: <FontAwesomeIcon icon={faFaceLaughSquint} />,
    3: <FontAwesomeIcon icon={faFaceLaugh} />,
    4: <FontAwesomeIcon icon={faFaceSmile} />,
    5: <FontAwesomeIcon icon={faFaceMeh} />,
    6: <FontAwesomeIcon icon={faFaceFrown} />,
    7: <FontAwesomeIcon icon={faFaceTired} />,
    8: <FontAwesomeIcon icon={faFaceDizzy} />,
  };

  const Status = {
    0: "Error",
    1: "최고",
    2: "매우좋음",
    3: "좋음",
    4: "보통",
    5: "별로",
    6: "나쁨",
    7: "매우나쁨",
    8: "최악",
  };

  return (
    <div className={styles.SmallCard}>
      <div className={styles.location}>{title}</div>
      <div className={styles.icon}>{isLoading ? <Loading /> : Icon[level]}</div>
      <div className={styles.status}>{Status[level]}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default SmallCard;
