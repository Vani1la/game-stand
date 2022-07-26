import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { addGamesAction, fetchGamesAction } from "../../store/actions";
import Loader from "../Loader";
import * as Styles from "./styles";
import PlatformHandler from "../PlatformsHandler";
import SortHandlers from "../SortHandlers";

const GamesList = () => {
  const dispatch = useDispatch();

  const gamesList = useSelector((state) => state.gamesList);
  const gamesIsLoading = useSelector((state) => state.gamesIsLoading);
  const fetchParams = useSelector((state) => state.fetchParams);

  React.useEffect(() => {
    const scrollHandler = (e) => {
      const scrollOnEndPage =
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) ===
        0;
      if (scrollOnEndPage && !gamesIsLoading) {
        dispatch(
          fetchGamesAction({ params: fetchParams, action: addGamesAction })
        );
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [gamesIsLoading, dispatch, fetchParams]);

  return (
    <Styles.container>
      <Styles.handlersWrapper>
        <PlatformHandler />
        <SortHandlers />
      </Styles.handlersWrapper>
      {gamesList.map((gameData) => (
        <React.Fragment key={gameData.id}>
          {gameData.background_image && (
            <Styles.gameWrapper>
              <Image
                src={gameData.background_image}
                alt="#"
                width={714}
                height={401}
              />
              <Link href={`/game/${gameData.id}`}>
                <Styles.gameName>{gameData.name}</Styles.gameName>
              </Link>
              <Styles.gameInfoWrapper>
                <span>
                  <Styles.textSecondary>Дата выхода: </Styles.textSecondary>
                  {gameData.released || "-"}
                </span>
                <span>
                  <Styles.textSecondary>Рейтинг: </Styles.textSecondary>
                  {gameData.rating}
                </span>
              </Styles.gameInfoWrapper>
            </Styles.gameWrapper>
          )}
        </React.Fragment>
      ))}
      {gamesIsLoading && (
        <Styles.loaderWrapper>
          <Loader />
        </Styles.loaderWrapper>
      )}
    </Styles.container>
  );
};

export default GamesList;
