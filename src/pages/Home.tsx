import { useEffect } from "react";
import useBean from "../hooks/useBean";
import CardList from "../components/CardList";

const Home = () => {
  const { beans, getBeans } = useBean();
  useEffect(() => {
    getBeans();
  }, []);

  console.log(beans);
  return (
    <div>
      <p>this is home page</p>
      <CardList data={beans} />
    </div>
  );
};

export default Home;
