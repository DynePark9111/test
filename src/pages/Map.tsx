import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LocalNavbar from "../components/LocalNavbar";
import styles from "../styles/Map.module.scss";

const Map = () => {
  const seoul = {
    longitude: 127.02,
    latitude: 37.53,
  };
  const [position, setPosition] = useState(seoul);
  const [overlay, setOverlay] = useState("pm10");
  const [scale, setScale] = useState(4000);
  let src = `https://earth.nullschool.net/#current/particulates/surface/level/overlay=${overlay}/orthographic=127,37,${scale}/loc=${position.longitude},${position.latitude}`;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }
  return (
    <div className={styles.Map}>
      <LocalNavbar current="지도" />
      <section>
        <iframe title={overlay} src={src} />
        <div className={styles.topLeft}>자료제공 : nullschool</div>

        <div className={styles.topRight}>
          <button
            id={overlay === "pm10" ? styles.selected : ""}
            onClick={() => setOverlay("pm10")}
          >
            미세먼지
          </button>
          <button
            id={overlay === "pm2.5" ? styles.selected : ""}
            onClick={() => setOverlay("pm2.5")}
          >
            초미세먼지
          </button>
          <button onClick={() => getLocation()}>GPS</button>
          <button onClick={() => setPosition(seoul)}>서울</button>
        </div>
        <div className={styles.bottomLeft}>
          <div>위치</div>
          <FontAwesomeIcon icon={faCircle} className={styles.circle} />
        </div>
        <div className={styles.bottomRight}>
          <button onClick={() => setScale((prev) => prev - 500)}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={() => setScale((prev) => prev + 500)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Map;
