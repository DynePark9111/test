import styles from "../styles/About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceDizzy,
  faFaceFrown,
  faFaceGrinStars,
  faFaceLaugh,
  faFaceLaughSquint,
  faFaceMeh,
  faFaceSmile,
  faFaceTired,
} from "@fortawesome/free-regular-svg-icons";
import LocalNavbar from "../components/LocalNavbar";

const About = () => {
  return (
    <div className={styles.About}>
      <LocalNavbar current="정보" />
      <div className={styles.wrapper}>
        <h2>미세다에서 사용하는 용어 설명</h2>
        <h3>기본 설정은 8단계로 되어있으나 설정에서 변경 가능합니다.</h3>
        <h4>8단계</h4>
        <table className={styles.scaleEight}>
          <tr className={styles.icons}>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faFaceGrinStars} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceLaughSquint} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceLaugh} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceSmile} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceMeh} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceFrown} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceTired} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceDizzy} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>최고</td>
            <td>매우좋음</td>
            <td>좋음</td>
            <td>보통</td>
            <td>별로</td>
            <td>나쁨</td>
            <td>매우나쁨</td>
            <td>최악</td>
          </tr>
          <tr>
            <td>미세먼지</td>
            <td>0~15</td>
            <td>16~30</td>
            <td>31~40</td>
            <td>41~50</td>
            <td>51~75</td>
            <td>76~100</td>
            <td>101~150</td>
            <td>151~</td>
          </tr>
          <tr>
            <td>초미세먼지</td>
            <td>0~8</td>
            <td>9~15</td>
            <td>16~20</td>
            <td>21~25</td>
            <td>26~37</td>
            <td>38~50</td>
            <td>51~75</td>
            <td>76~</td>
          </tr>
          <tr>
            <td>오존</td>
            <td>0~0.02</td>
            <td>0.02~0.03</td>
            <td>0.03~0.06</td>
            <td>0.06~0.09</td>
            <td>0.09~0.12</td>
            <td>0.12~0.15</td>
            <td>0.15~0.38</td>
            <td>0.38~</td>
          </tr>
        </table>

        <h4>4단계</h4>
        <table className={styles.scaleFour}>
          <tr className={styles.icons}>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faFaceLaughSquint} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceSmile} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceFrown} />
            </td>
            <td>
              <FontAwesomeIcon icon={faFaceTired} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>좋음</td>
            <td>보통</td>
            <td>나쁨</td>
            <td>매우나쁨</td>
          </tr>
          <tr>
            <td>미세먼지&#40;한국&#41;</td>
            <td>0~30</td>
            <td>31~80</td>
            <td>81~150</td>
            <td>151~</td>
          </tr>
          <tr>
            <td>미세먼지&#40;WHO&#41;</td>
            <td>0~30</td>
            <td>31~50</td>
            <td>51~100</td>
            <td>101~</td>
          </tr>
          <tr>
            <td>초미세먼지&#40;한국&#41;</td>
            <td>0~15</td>
            <td>16~35</td>
            <td>36~75</td>
            <td>76~</td>
          </tr>
          <tr>
            <td>초미세먼지&#40;WHO&#41;</td>
            <td>0~15</td>
            <td>16~25</td>
            <td>26~50</td>
            <td>51~</td>
          </tr>
        </table>

        <h4>주의사항</h4>
        <div>
          미세다 자료는 인증 전 실시간 관측 자료로, 현지 사정에 의해 잘못된 값이
          표기될 수 있습니다. 또한 측정소 상태에 따라 측정 시간이 지연되거나
          측정값이 표기되지 않을 수 있습니다. 하여, 사용시 발생하는 건강 혹은
          기타 문제에 대해 미세다는 아무 책임을 지지 않습니다.
        </div>
        <h4>통합지수&#40;통합대기환경지수, CAI&#41;</h4>
        <div>
          통합대기환경지수 &#40;CAI Comprehensive Air-quality Index&#41;는
          대표적인 6가지 오염물질 &#40;PM10, PM2.5, O3, NO², CO, SO²&#41;에 대한
          대기질의 상태지수를 나타냅니다.
        </div>
        <h4>미세먼지&#40;PM10&#41;</h4>
        <div>
          지름 10μm 이하인 먼지를 미세먼지라 말하며 환경법령에서는 흔히 PM10으로
          부른다. 사람의 폐포까지 깊숙하게 침투해 각종 호흡기 질환의 직접적인
          원인이 되며, 황산염, 실산염, 암모니아 등의 이온 성분과 금속화합물,
          탄소화합물 등 유해물질로 이뤄져 있다.
        </div>
        <h4>초미세먼지&#40;PM2.5&#41;</h4>
        <div>
          지름 2.5μm 이하인 먼지를 초미세먼지라 말하며 환경법령에서는 흔히
          PM2.5으로 부른다. 미세먼지보다 유해한 초미세먼지는 입자가 미세하여 코
          점막을 통해 걸러지지 않고 흡입시 폐포까지 직접 침투하여 천식이나
          폐질환의 유병들과 조기사망률을 증가시킨다.
        </div>
      </div>
    </div>
  );
};

export default About;
