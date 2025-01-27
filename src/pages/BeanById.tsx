import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useParams } from "react-router";
import { fetchBeanById } from "../features/beans/beansSlice";

const Skeleton = () => (
  <div className="flex justify-center">
  <div className="animate-pulse">
    <div className="flex justify-center mb-4">
      <div className="w-94 h-48 bg-gray-300 rounded-lg"></div>
    </div>
    <div className="flex flex-col text-center">
      <div className="h-6 bg-gray-300 w-3/4 mx-auto mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/2 mx-auto mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 w-2/3 mx-auto mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 w-5/6 mx-auto mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/3 mx-auto mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/3 mx-auto mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/3 mx-auto mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/3 mx-auto rounded"></div>
    </div>
  </div>
</div>
);

const BeanById = () => {
  const params = useParams(); // Отримати ID з URL
  const dispatch = useDispatch<AppDispatch>();
  const beansID = useSelector((state: RootState) => state.beans.beansId);
  const status = useSelector((state: RootState) => state.beans.status);

  useEffect(() => {
    if (
      params.beanId &&
      (!beansID || beansID.beanId !== Number(params.beanId))
    ) {
      dispatch(fetchBeanById(Number(params.beanId)));
    }
  }, [params.beanId, beansID, dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {status === "loading" ? (
        <Skeleton />
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <div className="flex justify-center">
            <img
              src={beansID?.imageUrl}
              alt={beansID?.flavorName}
              className="w-75 h-50 object-cover rounded-lg mb-4"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{beansID?.flavorName}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Description:</strong> {beansID?.description}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Color Group:</strong> {beansID?.colorGroup}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Group Name:</strong> {beansID?.groupName.join(", ")}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Ingredients:</strong> {beansID?.ingredients.join(", ")}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <p>
                <strong>Gluten Free:</strong> {beansID?.glutenFree ? "Yes" : "No"}
              </p>
              <p>
                <strong>Kosher:</strong> {beansID?.kosher ? "Yes" : "No"}
              </p>
              <p>
                <strong>Seasonal:</strong> {beansID?.seasonal ? "Yes" : "No"}
              </p>
              <p>
                <strong>Sugar Free:</strong> {beansID?.sugarFree ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeanById;
