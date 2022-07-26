import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFetchParamsAction,
  fetchGamesAction,
  setGamesAction,
} from "../../store/actions";
import * as Styles from "./styles";

const PlatformHandler = () => {
  const dispatch = useDispatch();
  const platforms = useSelector((state) => state.platforms);
  const fetchParams = useSelector((state) => state.fetchParams);

  const onChange = (e) => {
    const newFetchParams = { parent_platforms: e.target.value, page: 1 };
    dispatch(changeFetchParamsAction(newFetchParams));
    dispatch(
      fetchGamesAction({
        params: { ...fetchParams, ...newFetchParams },
        action: setGamesAction,
      })
    );
  };

  return (
    <Styles.select onChange={onChange}>
      {platforms.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </Styles.select>
  );
};

export default React.memo(PlatformHandler);
