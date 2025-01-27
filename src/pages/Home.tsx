import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeans } from "../features/beans/beansSlice";
import { RootState, AppDispatch } from "../app/store";
import CardList from "../components/CardList";

const Skeleton = () => (
  <div className="flex justify-center">
    <div className="animate-pulse shadow-lg p-5">
      <div className="h-6 bg-gray-300 w-3/4 mb-4 rounded"></div>
      <div className="flex justify-center mb-4">
        <div className="w-54 h-48 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="flex flex-col text-center">
        <div className="h-10 bg-gray-300 w-full mx-auto mb-2 rounded"></div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const beans = useSelector((state: RootState) => state.beans.beans);
  const status = useSelector((state: RootState) => state.beans.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBeans()); // Викликаємо fetch лише якщо статус "idle"
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <CardList data={beans} />
    </div>
  );
};

export default Home;
