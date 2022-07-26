import React from "react";
import { wrapper } from "../../store";
import { fetchGameAction, fetchScreenshotsAction } from "../../store/actions";
import { END } from "redux-saga";
import GameContent from "../../components/GameContent";

const GamePage = () => {
  return (
    <div>
      <GameContent />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      store.dispatch(fetchGameAction({ id: params.slug }));
      store.dispatch(fetchScreenshotsAction({ id: params.slug }));
      store.dispatch(END);

      await store.sagaTask.toPromise();

      return {
        props: {},
      };
    }
);

export default GamePage;
