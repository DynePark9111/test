import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { lvContext } from "../context/lvContext";
import styles from "../styles/Sidebar.module.scss";
import SlideSwitch from "./SlideSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa4,
  fa8,
  faCircleInfo,
  faGear,
  faHeart,
  faHome,
  faMap,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { sidebarContext } from "../context/sidebarContext";
import Modal from "./Modal";
import { SidebarWithoutModalProps } from "../types/type";
import { darkmodeContext } from "../context/darkmodeContext";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useContext(sidebarContext);
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleSidebar}>
        <SidebarWithoutModal isOpen={isOpen} />
      </Modal>
    </>
  );
};

export default Sidebar;

const SidebarWithoutModal: FC<SidebarWithoutModalProps> = ({ isOpen }) => {
  const { isLv8, toggleLv8 } = useContext(lvContext);
  const { isDark, toggleDarkmode } = useContext(darkmodeContext);

  return (
    <div
      className={styles.Sidebar}
      id={isOpen ? styles.show : ""}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <FontAwesomeIcon icon={faSun} className={styles.logo} />
          <div className={styles.name}>미세다</div>
          <div className={styles.version}>Version 0.1</div>
        </div>
        <ul className={styles.nav}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              <div className={styles.text}>홈으로</div>
            </Link>
          </li>

          <li>
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} className={styles.icon} />
              <div className={styles.text}>검색</div>
            </Link>
          </li>
          <li>
            <Link to="/map">
              <FontAwesomeIcon icon={faMap} className={styles.icon} />
              <div className={styles.text}>지도</div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
              <div className={styles.text}>정보</div>
            </Link>
          </li>
          <li>
            <Link to="/recommend">
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              <div className={styles.text}>어플 추천하기</div>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FontAwesomeIcon icon={faGear} className={styles.icon} />
              <div className={styles.text}>설정</div>
            </Link>
          </li>
          <li>
            <div className={styles.slideDiv}>
              {isLv8 ? (
                <FontAwesomeIcon icon={fa8} className={styles.icon} />
              ) : (
                <FontAwesomeIcon icon={fa4} className={styles.icon} />
              )}
              <div className={styles.text}>
                <span>기준 : {isLv8 ? "WHO" : "AirKorea"}</span>
              </div>
            </div>
            <div className={styles.slide}>
              <SlideSwitch isChecked={isLv8} toggle={toggleLv8} />
            </div>
          </li>
          <li>
            <div className={styles.slideDiv}>
              {isDark ? (
                <FontAwesomeIcon icon={faMoon} className={styles.icon} />
              ) : (
                <FontAwesomeIcon icon={faSun} className={styles.icon} />
              )}
              <div className={styles.text}>다크모드</div>
            </div>
            <div className={styles.slide}>
              <SlideSwitch isChecked={isDark} toggle={toggleDarkmode} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
