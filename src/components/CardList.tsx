import React, { FC } from "react";
import { Bean } from "../interface/Bean";
import CardBean from "./CardBean";

type BeanListProp = {
  data: Bean[];
};

const CardList: FC<BeanListProp> = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((el) => (
          <CardBean key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
