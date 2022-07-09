import styles from "../styles/Search.module.scss";
import { FC, useContext, useState } from "react";
import station_list from "../data/station_list.json";
import { ResultProps, ResultsFoundProps, SearchbarProps } from "../types/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkEmpty } from "@fortawesome/free-regular-svg-icons";
import { bookmarkContext } from "../context/bookmarkContext";
import LocalNavbar from "../components/LocalNavbar";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.Search}>
      <LocalNavbar current="검색" />
      <Searchbar search={search} setSearch={setSearch} />
      {search === "" ? <ResultsInitial /> : <ResultsFound search={search} />}
    </div>
  );
};

export default Search;

const Searchbar: FC<SearchbarProps> = ({ search, setSearch }) => {
  return (
    <div className={styles.Searchbar}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="동/읍/면 을 입력해주세요"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.xIcon}
          id={search ? styles.erase : ""}
          onClick={() => setSearch("")}
          title="검색어 삭제"
        />
      </div>
    </div>
  );
};

const ResultsInitial = () => {
  const { bookmark } = useContext(bookmarkContext);
  return (
    <div className={styles.Results}>
      <div className={styles.header}>즐겨찾기</div>
      {bookmark.map((station: string) => {
        return (
          <Result key={station} stateAndDistrict={station} text={station} />
        );
      })}
    </div>
  );
};

const ResultsFound: FC<ResultsFoundProps> = ({ search }) => {
  const searchResultArray = station_list.stations.filter((station) =>
    station.adress.includes(search)
  );
  return (
    <div className={styles.Results}>
      <div className={styles.header}>검색결과</div>
      {searchResultArray.map((station) => {
        return (
          <Result
            key={station.id}
            stateAndDistrict={`${station.state} ${station.district}`}
            text={`${station.state} ${station.district} : ${station.adress}`}
          />
        );
      })}
    </div>
  );
};

const Result: FC<ResultProps> = ({ stateAndDistrict, text }) => {
  const navigate = useNavigate();
  const { bookmark, dispatch } = useContext(bookmarkContext);
  const click = (station: string) => {
    if (bookmark.includes(station)) {
      dispatch({ type: "REMOVE_BOOKMARK", payload: station });
    } else {
      dispatch({ type: "ADD_BOOKMARK", payload: station });
    }
  };
  return (
    <div
      className={styles.Result}
      title={`${stateAndDistrict} 검색`}
      onClick={() => navigate(`/station/${stateAndDistrict}`)}
    >
      <div className={styles.text}>{text}</div>
      <FontAwesomeIcon
        icon={
          bookmark.includes(stateAndDistrict) ? faBookmark : faBookmarkEmpty
        }
        className={styles.bookmarkIcon}
        title={
          bookmark.includes(stateAndDistrict) ? "북마크 제거" : "북마크 추가"
        }
        onClick={(e) => {
          e.stopPropagation();
          click(stateAndDistrict);
        }}
      />
    </div>
  );
};
