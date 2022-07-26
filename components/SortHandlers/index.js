import React from "react";
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFetchParamsAction,
  fetchGamesAction,
  setGamesAction,
} from "../../store/actions";

const SortHandlers = () => {
  const dispatch = useDispatch();
  const fetchParams = useSelector((state) => state.fetchParams);

  const onClickReleased = () => {
    const newOrdering =
      fetchParams.ordering === "released" ? "-released" : "released";
    dispatch(
      changeFetchParamsAction({
        ordering: newOrdering,
        page: 1,
      })
    );
    dispatch(
      fetchGamesAction({
        params: { ...fetchParams, ordering: newOrdering, page: 1 },
        action: setGamesAction,
      })
    );
  };

  const onClickRating = () => {
    const newOrdering =
      fetchParams.ordering === "rating" ? "-rating" : "rating";
    dispatch(
      changeFetchParamsAction({
        ordering: newOrdering,
        page: 1,
      })
    );
    dispatch(
      fetchGamesAction({
        params: { ...fetchParams, ordering: newOrdering, page: 1 },
        action: setGamesAction,
      })
    );
  };

  return (
    <Styles.handlersWrapper>
      <Styles.handlerBtn width="75px" onClick={onClickReleased}>
        Дата
        <Styles.svg
          reverse={fetchParams.ordering === "released"}
          hidden={
            fetchParams.ordering !== "released" &&
            fetchParams.ordering !== "-released"
          }
          width="12"
          height="8"
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
      </Styles.handlerBtn>
      <Styles.handlerBtn width="95px" left="10px" onClick={onClickRating}>
        Рейтинг
        <Styles.svg
          reverse={fetchParams.ordering === "rating"}
          hidden={
            fetchParams.ordering !== "rating" &&
            fetchParams.ordering !== "-rating"
          }
          width="12"
          height="8"
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
      </Styles.handlerBtn>
    </Styles.handlersWrapper>
  );
};

export default React.memo(SortHandlers);
