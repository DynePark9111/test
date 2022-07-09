import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import screenshot from "../service/screenshot";
import { useContext } from "react";
import { sidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useContext(sidebarContext);
  return (
    <div className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div
          className={styles.left}
          onClick={() => toggleSidebar()}
          title="메뉴"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={styles.right}>
          <li title="스크린샷" onClick={() => screenshot()}>
            <FontAwesomeIcon icon={faCamera} />
          </li>
          <li>
            <Link to="/map" title="지도">
              <FontAwesomeIcon icon={faMap} />
            </Link>
          </li>
          <li>
            <Link to="/search" title="검색">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
