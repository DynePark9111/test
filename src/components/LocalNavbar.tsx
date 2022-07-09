import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarContext } from "../context/sidebarContext";
import styles from "../styles/LocalNavbar.module.scss";
import { LocalNavbarProps } from "../types/type";

const LocalNavbar: FC<LocalNavbarProps> = ({ current }) => {
  const { toggleSidebar } = useContext(sidebarContext);
  const navigate = useNavigate();
  return (
    <div className={styles.LocalNavbar}>
      <div className={styles.wrapper}>
        <div className={styles.icon} onClick={() => toggleSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.current}>{current}</div>
        <div
          title="돌아가기"
          className={styles.icon}
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
    </div>
  );
};

export default LocalNavbar;
