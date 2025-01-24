import React from "react";
import { Bean } from "../interface/Bean";
// import { useDispatch} from "react-redux";
// import { AppDispatch } from "../app/store";
// import { fetchBeanById } from "../features/beans/beansSlice";
import { useNavigate } from "react-router";
type JellyBeanDetailsProps = {
  data: Bean;
};
const CardBean: React.FC<JellyBeanDetailsProps> = ({ data }) => {
  // const dispatch = useDispatch<AppDispatch>(); // Типізований диспетчер

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        // dispatch(fetchBeanById(data.beanId));
        navigate(`/${data.beanId}`);
      }}
      className={`w-[300px] m-4  p-5 rounded-lg shadow-lg hover:shadow-xl`}
    >
      <h2 className="text-xl  font-bold mb-4">{data.flavorName}</h2>
      <img
        src={data.imageUrl}
        alt={data.flavorName}
        className="w-54 rounded-lg mb-4"
      />
      <p className="mb-2">
        <strong>Description:</strong> {data.description}
      </p>
      {/* <p className="mb-2"><strong>Color Group:</strong> {data.colorGroup}</p>
          <p className="mb-2"><strong>Group Name:</strong> {data.groupName.join(', ')}</p> */}
      {/* <p className="mb-2"><strong>Ingredients:</strong> {data.ingredients.join(', ')}</p> */}
      {/* <p className="mb-2"><strong>Gluten Free:</strong> {data.glutenFree ? 'Yes' : 'No'}</p>
          <p className="mb-2"><strong>Kosher:</strong> {data.kosher ? 'Yes' : 'No'}</p>
          <p className="mb-2"><strong>Seasonal:</strong> {data.seasonal ? 'Yes' : 'No'}</p>
          <p className="mb-2"><strong>Sugar Free:</strong> {data.sugarFree ? 'Yes' : 'No'}</p> */}
    </div>
  );
};

export default CardBean;
