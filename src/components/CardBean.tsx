import React from 'react'
import { Bean } from '../interface/Bean';
type JellyBeanDetailsProps = {
    data: Bean;
  };
const CardBean:React.FC<JellyBeanDetailsProps> = ({data}) => {
    return (
        <div className={`w-[300px]  p-5 rounded-lg `}>
          <h2 className="text-xl  font-bold mb-4">{data.flavorName}</h2>
          <img src={data.imageUrl} alt={data.flavorName} className="w-54 rounded-lg mb-4" />
          <p className="mb-2"><strong>Description:</strong> {data.description}</p>
          {/* <p className="mb-2"><strong>Color Group:</strong> {data.colorGroup}</p>
          <p className="mb-2"><strong>Group Name:</strong> {data.groupName.join(', ')}</p> */}
          {/* <p className="mb-2"><strong>Ingredients:</strong> {data.ingredients.join(', ')}</p> */}
          {/* <p className="mb-2"><strong>Gluten Free:</strong> {data.glutenFree ? 'Yes' : 'No'}</p>
          <p className="mb-2"><strong>Kosher:</strong> {data.kosher ? 'Yes' : 'No'}</p>
          <p className="mb-2"><strong>Seasonal:</strong> {data.seasonal ? 'Yes' : 'No'}</p>
          <p className="mb-2"><strong>Sugar Free:</strong> {data.sugarFree ? 'Yes' : 'No'}</p> */}
        </div>
      );
}

export default CardBean
