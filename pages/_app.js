import { wrapper } from "../store";
import GlobalStyles from "../styles/global";
import MainLayout from "../components/MainLayout";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(App);
