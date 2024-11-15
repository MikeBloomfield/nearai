import styles from "./lines.module.scss";

import SmallLines from "./smallLines/SmallLines";
import MainLines from "./mainLines/MainLines";

const WebLines = () => {
  const pathArr = [
    {
      id: 0,
      path: "M1440 131.102H1335.28C1297.84 131.102 1261.15 120.594 1229.39 100.773L1118.29 31.4402C1086.53 11.6196 1049.85 1.11157 1012.41 1.11157L804.087 1.11157",
    },
    {
      id: 1,
      path: "M1440 131.102H1319.71C1292.19 131.102 1264.97 125.424 1239.75 114.425L1107.93 56.9329C1082.71 45.9336 1055.49 40.2563 1027.98 40.2563L804.087 40.2563",
    },
    {
      id: 2,
      path: "M1440 131.101H1301.42C1285.85 131.101 1270.34 129.283 1255.19 125.685L1092.49 87.0314C1077.34 83.4332 1061.83 81.6157 1046.26 81.6157L804.087 81.6157",
    },
    {
      id: 3,
      path: "M1440 145.134H1301.42C1285.85 145.134 1270.34 146.951 1255.19 150.549L1092.49 189.203C1077.34 192.801 1061.83 194.618 1046.26 194.618L804.087 194.618",
    },
    {
      id: 4,
      path: "M1440 145.135H1319.71C1292.19 145.135 1264.97 150.812 1239.75 161.812L1107.93 219.304C1082.71 230.303 1055.49 235.98 1027.98 235.98L804.087 235.98",
    },
    {
      id: 5,
      path: "M1440 145.134H1335.28C1297.84 145.134 1261.15 155.642 1229.39 175.462L1118.29 244.795C1086.53 264.616 1049.85 275.124 1012.41 275.124L804.087 275.124",
    },
    {
      id: 6,
      path: "M0 131.102H121.321C156.455 131.102 190.97 121.846 221.39 104.266L353.458 27.9467C383.878 10.3672 418.393 1.11157 453.527 1.11157L686.723 1.11157",
    },
    {
      id: 7,
      path: "M0 131.102H136.092C161.76 131.102 187.188 126.161 210.988 116.549L363.86 54.8091C387.66 45.1972 413.088 40.2563 438.756 40.2563L686.723 40.2563",
    },
    {
      id: 8,
      path: "M0 131.101H153.215C167.665 131.101 182.072 129.534 196.185 126.43L378.663 86.2864C392.775 83.1818 407.183 81.6157 421.633 81.6157L686.723 81.6157",
    },
    {
      id: 9,
      path: "M0 145.134H153.215C167.665 145.134 182.072 146.7 196.185 149.804L378.663 189.948C392.775 193.052 407.183 194.618 421.633 194.618L686.723 194.618",
    },
    {
      id: 10,
      path: "M0 145.135H136.092C161.76 145.135 187.188 150.076 210.988 159.688L363.86 221.428C387.66 231.04 413.088 235.98 438.756 235.98L686.723 235.98",
    },
    {
      id: 11,
      path: "M0 145.134H121.321C156.455 145.134 190.97 154.389 221.39 171.969L353.458 248.289C383.878 265.868 418.393 275.124 453.527 275.124L686.723 275.124",
    },
  ];

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 1440 276" fill="none" xmlns="http://www.w3.org/2000/svg">
        <SmallLines isAnimate={true} pathArr={pathArr} />
        <MainLines pathArr={pathArr} />

        <defs>
          <linearGradient id="paint0_linear_6007_308" x1="998.037" y1="-6.55023" x2="1008.81" y2="97.9166" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint1_linear_6007_308" x1="998.037" y1="34.9018" x2="1003.33" y2="108.305" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint2_linear_6007_308" x1="998.037" y1="78.699" x2="999.613" y2="118.829" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint3_linear_6007_308" x1="998.037" y1="197.535" x2="999.613" y2="157.405" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint4_linear_6007_308" x1="998.037" y1="241.335" x2="1003.33" y2="167.932" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint5_linear_6007_308" x1="998.037" y1="282.786" x2="1008.81" y2="178.319" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint6_linear_6007_308" x1="477.275" y1="-6.55023" x2="467.283" y2="98.0736" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint7_linear_6007_308" x1="477.275" y1="34.9018" x2="472.373" y2="108.359" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint8_linear_6007_308" x1="477.275" y1="78.699" x2="475.816" y2="118.838" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint9_linear_6007_308" x1="477.275" y1="197.535" x2="475.816" y2="157.397" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint10_linear_6007_308" x1="477.275" y1="241.335" x2="472.373" y2="167.878" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>

          <linearGradient id="paint11_linear_6007_308" x1="477.275" y1="282.786" x2="467.283" y2="178.162" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WebLines;
