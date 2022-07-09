import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalNavbar from "../components/LocalNavbar";
import styles from "../styles/NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <LocalNavbar current="" />
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faTriangleExclamation} className={styles.icon} />
        <span>404 Not Found</span>
        <span>요청하신 페이지를 찾을 수 없습니다.</span>
      </div>
    </div>
  );
};

export default NotFound;
