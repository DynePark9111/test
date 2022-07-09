function pm10Lv4Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 30:
      return 2;
    case value <= 80:
      return 4;
    case value <= 150:
      return 5;
    case value > 151:
      return 7;
    default:
      return 0;
  }
}
function pm25Lv4Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 15:
      return 2;
    case value <= 35:
      return 4;
    case value <= 75:
      return 5;
    case value > 76:
      return 7;
    default:
      return 0;
  }
}
function o3Lv4Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 0.03:
      return 2;
    case value <= 0.09:
      return 4;
    case value <= 0.15:
      return 5;
    case value > 0.15:
      return 7;
    default:
      return 0;
  }
}
function no2Lv4Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 0.03:
      return 2;
    case value <= 0.06:
      return 4;
    case value <= 0.2:
      return 5;
    case value > 0.201:
      return 7;
    default:
      return 0;
  }
}
function coLv4Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 2:
      return 2;
    case value <= 9:
      return 4;
    case value <= 15:
      return 5;
    case value > 15:
      return 7;
    default:
      return 0;
  }
}
function so2Lv4Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 0.02:
      return 2;
    case value <= 0.05:
      return 4;
    case value <= 0.15:
      return 5;
    case value > 0.15:
      return 7;
    default:
      return 0;
  }
}

function pm10Lv8Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 15:
      return 1;
    case value <= 30:
      return 2;
    case value <= 40:
      return 3;
    case value <= 50:
      return 4;
    case value <= 75:
      return 5;
    case value <= 100:
      return 6;
    case value <= 150:
      return 7;
    case value > 150:
      return 8;
    default:
      return 0;
  }
}
function pm25Lv8Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 8:
      return 1;
    case value <= 15:
      return 2;
    case value <= 20:
      return 3;
    case value <= 25:
      return 4;
    case value <= 37:
      return 5;
    case value <= 38:
      return 6;
    case value <= 75:
      return 7;
    case value > 76:
      return 8;
    default:
      return 0;
  }
}
function o3Lv8Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 0.02:
      return 1;
    case value <= 0.03:
      return 2;
    case value <= 0.06:
      return 3;
    case value <= 0.09:
      return 4;
    case value <= 0.12:
      return 5;
    case value <= 0.15:
      return 6;
    case value <= 0.38:
      return 7;
    case value > 0.38:
      return 8;
    default:
      return 0;
  }
}
function no2Lv8Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 0.02:
      return 1;
    case value <= 0.03:
      return 2;
    case value <= 0.05:
      return 3;
    case value <= 0.06:
      return 4;
    case value <= 0.13:
      return 5;
    case value <= 0.2:
      return 6;
    case value <= 1.1:
      return 7;
    case value > 2:
      return 8;
    default:
      return 0;
  }
}
function coLv8Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 1:
      return 1;
    case value <= 2:
      return 2;
    case value <= 5.5:
      return 3;
    case value <= 9:
      return 4;
    case value <= 12:
      return 5;
    case value <= 15:
      return 6;
    case value <= 32:
      return 7;
    case value > 32:
      return 8;
    default:
      return 0;
  }
}
function so2Lv8Convert(value: number) {
  switch (true) {
    case value === null:
      return 0;
    case value <= 0.01:
      return 1;
    case value <= 0.02:
      return 2;
    case value <= 0.04:
      return 3;
    case value <= 0.05:
      return 4;
    case value <= 0.1:
      return 5;
    case value <= 0.15:
      return 6;
    case value <= 0.6:
      return 7;
    case value > 0.6:
      return 8;
    default:
      return 0;
  }
}

function getLv4(
  pm10: number,
  pm25: number,
  o3: number,
  no2: number,
  co: number,
  so2: number
) {
  const pm10Lv4 = pm10Lv4Convert(pm10);
  const pm25Lv4 = pm25Lv4Convert(pm25);
  const o3Lv4 = o3Lv4Convert(o3);
  const no2Lv4 = no2Lv4Convert(no2);
  const coLv4 = coLv4Convert(co);
  const so2Lv4 = so2Lv4Convert(so2);
  const maxLv4 = Math.max(pm10Lv4, pm25Lv4);
  return { pm10Lv4, pm25Lv4, o3Lv4, no2Lv4, coLv4, so2Lv4, maxLv4 };
}

function getLv8(
  pm10: number,
  pm25: number,
  o3: number,
  no2: number,
  co: number,
  so2: number
) {
  const pm10Lv8 = pm10Lv8Convert(pm10);
  const pm25Lv8 = pm25Lv8Convert(pm25);
  const o3Lv8 = o3Lv8Convert(o3);
  const no2Lv8 = no2Lv8Convert(no2);
  const coLv8 = coLv8Convert(co);
  const so2Lv8 = so2Lv8Convert(so2);
  const maxLv8 = Math.max(pm10Lv8, pm25Lv8);
  return { pm10Lv8, pm25Lv8, o3Lv8, no2Lv8, coLv8, so2Lv8, maxLv8 };
}

function convertData(
  pm10: number,
  pm25: number,
  o3: number,
  no2: number,
  co: number,
  so2: number,
  dataTime: Date
) {
  const lv4 = getLv4(pm10, pm25, o3, no2, co, so2);
  const lv8 = getLv8(pm10, pm25, o3, no2, co, so2);
  return { dataTime, pm10, pm25, o3, no2, co, so2, ...lv4, ...lv8 };
}

module.exports = {
  convertData,
};
