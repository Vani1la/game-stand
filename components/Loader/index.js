import React from "react";
import * as Styles from "./styles";

const Loader = () => {
  return (
    <Styles.loaderWrapper>
      <Styles.loader />
    </Styles.loaderWrapper>
  );
};

export default React.memo(Loader);
