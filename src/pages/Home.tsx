import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeans } from "../features/beans/beansSlice";
import { RootState, AppDispatch } from "../app/store";
import CardList from "../components/CardList";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>(); // Типізований диспетчер
  const beans = useSelector((state: RootState) => state.beans.beans); // Доступ до масиву бобів
  const status = useSelector((state: RootState) => state.beans.status); // Доступ до статусу

  useEffect(() => {
    dispatch(fetchBeans()); // Викликаємо асинхронну дію для отримання даних
  }, [dispatch]);


  if (status === "loading") {
    return <div>Loading...</div>; // Відображаємо, якщо дані завантажуються
  }

  if (status === "failed") {
    return <div>Error loading data.</div>; // Відображаємо, якщо сталася помилка
  }

  return (
    <div>
      <CardList data={beans} />
    </div>
  );
};

export default Home;
