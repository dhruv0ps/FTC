import { Outlet } from "react-router-dom";
import Header from "../layout/Nav";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
