import GamesList from "../components/GamesList";
import { wrapper } from "../store";
import { END } from "redux-saga";
import {
  fetchGamesAction,
  fetchPlatformsAction,
  setGamesAction,
} from "../store/actions";

const IndexPage = () => {
  return (
    <div>
      <GamesList />
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(
    fetchGamesAction({
      params: store.getState().fetchParams,
      action: setGamesAction,
    })
  );
  store.dispatch(fetchPlatformsAction());
  store.dispatch(END);

  await store.sagaTask.toPromise();

  return {
    props: {},
  };
});

export default IndexPage;
