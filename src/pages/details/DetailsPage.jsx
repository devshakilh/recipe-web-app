import { useParams } from "react-router-dom";

import Loader from "../../components/loader/Loader";


import Breadcrumb from "../../components/breadcrumb/BreadCrumb";
import {  useRecipeQuery } from "../../redux/api/recipeApi";

const DetailsPage = () => {
 
  const { id } = useParams();
  
  const { data, isLoading, isFetching } = useRecipeQuery(id);
 
  


  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div className="container py-5 text-black">
      <Breadcrumb paths={[{label: "Home", link: "/"}, {label: data?.recipes?.id, link: "#"}]}/>
      <div className="border shadow-md rounded pb-5">
        <div className="flex flex-col lg:flex-row items-center overflow-hidden group">
          <img className="w-2/4" src={data?.recipes?.image} alt={data?.recipes?.image} />
          <div className="px-5 space-y-2">
            <h2 className="text-2xl font-bold mb-10  cursor-pointer">
            {data?.recipes?.title}
            </h2>
            <h2 className=" mb-2 text-[18px] cursor-pointer">
            <span className="text-2xl font-semibold">Ingredients:</span>   {data?.recipes?.ingredients}
            </h2>
            <h2 className="mb-2 text-[18px]  cursor-pointer">
           <span className="text-2xl font-semibold">Instructions:</span> {data?.recipes?.instructions}
            </h2>
            
         
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
