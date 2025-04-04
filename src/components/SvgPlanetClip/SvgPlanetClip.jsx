import { useEffect, useState } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import styles from './SvgPlanetClip.module.scss';
const polyPointsY = [
  0, 0, 0.21, 0.23, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.55, 0.55,
  0.46, 0.39, 0.31, 0.26, 0.22, 0.21, 0, 0, 1, 1,
];
const polyInitialPointsX = [
  0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
  0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 0,
];
const polyPointsXShifts = [
  0, 0, 0, -76.8, -151.68, -159.36, -167.04, -174.72, -180.48, -184.32, -188.16,
  -192, -192, 192, 192, 182.4, 153.6, 115.2, 57.6, 0, 0, 0, 0, 0,
];

const SvgPlanetClip = ({ id }) => {
  const screenWidth = useScreenWidth();

  const [points, setPoints] = useState([]);

  const getPoints = windowWidth => {
    const result = [];
    const polyPointsXwithShift = [];

    for (let i = 0; i < polyInitialPointsX.length; i++) {
      polyPointsXwithShift.push(
        (
          (polyInitialPointsX[i] * windowWidth + polyPointsXShifts[i]) /
          windowWidth
        ).toFixed(3)
      );
    }

    for (let i = 0; i < polyPointsXwithShift.length; i++) {
      result.push(`${polyPointsXwithShift[i]} ${polyPointsY[i]}`);
    }
    return result.join(',');
  };

  useEffect(() => {
    setPoints(getPoints(screenWidth));
  }, [screenWidth]);

  return (
    <svg width="0" height="0" className={styles.svgPlanetClip}>
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <polygon points={points} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgPlanetClip;
