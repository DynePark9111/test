import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <FontAwesomeIcon className={styles.icon} icon={faSpinner} />
    </div>
  );
};

export default Loading;
