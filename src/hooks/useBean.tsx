import { useState } from "react";
import { getData, getDataById } from "../service/service";
import { Bean } from "../interface/Bean";

const useBean = () => {
  const [beans, setBeans] = useState<Bean[]>([]);
  const [beansId, setBeansId] = useState<Bean>();
  const getBeans = async () => {
    try {
      const data = await getData();
      setBeans(data.items);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  const getBeansById = async (id: number) => {
    try {
      const data = await getDataById(id);
      setBeansId(data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };
  return { beans, getBeans, getBeansById,beansId };
};

export default useBean;
