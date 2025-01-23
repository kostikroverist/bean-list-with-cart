import { useState } from "react";
import { getData } from "../service/service";

const useBean = () => {
  const [beans, setBeans] = useState([]);

  const getBeans = async () => {
    try {
      const data = await getData();
      setBeans(data.items);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  return { beans, getBeans };
};

export default useBean;
