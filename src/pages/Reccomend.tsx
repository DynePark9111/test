import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalNavbar from "../components/LocalNavbar";
import styles from "../styles/Reccomend.module.scss";

const Reccomend = () => {
  function copyText() {
    navigator.clipboard.writeText("http://localhost:3000").then(() => {
      alert("주소 복사 완료!");
    });
  }
  return (
    <div className={styles.Reccomend}>
      <LocalNavbar current="어플 추천하기" />
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        <h3>광고 없는 미세먼지 & 날씨</h3>
        <h3>소중한 사람에게 "미세다"를 알려주세요</h3>
        <button onClick={() => copyText()}>사이트 주소 복사하기</button>
      </div>
    </div>
  );
};

export default Reccomend;
