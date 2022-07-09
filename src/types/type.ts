import { Dispatch, ReactNode, SetStateAction } from "react";

enum level {
  로딩 = 0,
  최고 = 1,
  매우좋음 = 2,
  좋음 = 3,
  보통 = 4,
  별로 = 5,
  나쁨 = 6,
  매우나쁨 = 7,
  최악 = 8,
}

export type dataMiseAPI = {
  co: string;
  coLv4: level;
  coLv8: level;
  dataTime: string;
  maxLv4: level;
  maxLv8: level;
  no2: string;
  no2Lv4: level;
  no2Lv8: level;
  o3: string;
  o3Lv4: level;
  o3Lv8: level;
  pm10: string;
  pm10Lv4: level;
  pm10Lv8: level;
  pm25: string;
  pm25Lv4: level;
  pm25Lv8: level;
  so2: string;
  so2Lv4: level;
  so2Lv8: level;
};

export type MainCardProps = {
  location: string | undefined;
  time: string;
  level: level;
  isLoading: boolean;
};

export type MainCardTextProps = {
  status: string;
  message: string;
};

export type SmallCardProps = {
  title: string;
  value: string;
  level: level;
  isLoading: boolean;
};

export type ResultProps = {
  stateAndDistrict: string;
  text: string;
};

export type ResultsFoundProps = {
  search: string;
};

export type SearchbarProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
};

export type LocalNavbarProps = {
  current: string;
};

export type SlideSwitchProps = {
  isChecked: boolean;
  toggle: () => void;
};

export type SidebarWithoutModalProps = {
  isOpen: boolean;
};
