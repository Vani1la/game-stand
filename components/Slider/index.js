import React from "react";
import * as Styles from "./styles";

const Slider = ({ children, width, height }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const onClickLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onClickRight = () => {
    if (currentSlide < children.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Styles.sliderWrapper width={width} height={height}>
      <Styles.roller
        width={width * children.length}
        transfrom={currentSlide * width}
      >
        {children}
      </Styles.roller>
      <Styles.btn left="0px" onClick={onClickLeft}>
        <Styles.svg
          rotate={90}
          width="20"
          height="13"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="#90A0B7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Styles.svg>
      </Styles.btn>
      <Styles.btn right="0px" onClick={onClickRight}>
        <Styles.svg
          rotate={270}
          width="20"
          height="13"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="#90A0B7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Styles.svg>
      </Styles.btn>
    </Styles.sliderWrapper>
  );
};

export default React.memo(Slider);
