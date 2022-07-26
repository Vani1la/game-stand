import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFetchParamsAction,
  fetchGamesAction,
  setGamesAction,
} from "../../store/actions";
import { useRouter } from "next/router";
import * as Styles from "./styles";

const Search = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchParams = useSelector((state) => state.fetchParams);

  const onKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      dispatch(changeFetchParamsAction({ page: 1, search: e.target.value }));
      dispatch(
        fetchGamesAction({
          params: { ...fetchParams, search: e.target.value, page: 1 },
          action: setGamesAction,
        })
      );
      if (router.pathname !== "/") {
        router.replace("/");
      }
    }
  };

  return <Styles.input onKeyDown={onKeyDown} />;
};

export default React.memo(Search);
