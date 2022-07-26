import Search from "../Search";
import * as Styles from "./styles";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <>
      <Styles.header>
        <Link href="/">
          <Styles.home>Главная</Styles.home>
        </Link>
        <Search />
      </Styles.header>
      {children}
    </>
  );
};

export default MainLayout;
