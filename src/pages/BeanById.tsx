import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useParams } from "react-router";
import { fetchBeanById } from "../features/beans/beansSlice";

const BeanById = () => {
  const params = useParams(); // Отримати ID з URL
  const dispatch = useDispatch<AppDispatch>();
  const beansID = useSelector((state: RootState) => state.beans.beansId);
  const status = useSelector((state: RootState) => state.beans.status);

  useEffect(() => {
    // Якщо ID є в URL і не завантажений, то викликати запит
    if (
      params.beanId &&
      (!beansID || beansID.beanId !== Number(params.beanId))
    ) {
      dispatch(fetchBeanById(Number(params.beanId)));
    }
  }, [params.beanId, beansID, dispatch]);

  return (
    <div>{status === "loading" ? <h2>Loading</h2> : beansID?.flavorName}</div>
  );
};

export default BeanById;
