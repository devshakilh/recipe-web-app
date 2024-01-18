// import { useAllRecipesQuery, useRecipesQuery } from "../../redux/api/recipeApi";

// import { FaRegEye } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

// import { useState } from "react";
// import { useDebounced } from "../../redux/hooks";
// import { useSelector } from "react-redux";
// import ProductNotFound from "../../components/product-not-found/ProductNotFound";
// import Loader from "../../components/loader/Loader";

// import { Link } from "react-router-dom";


// import FormSearch from "../../shared/FormSearch";
// import { getUniqueRecipes } from "../../utils/uniqueArr";

// const Home = () => {
//   const searchTerm = useSelector((state) => state.search.searchTerm);
//   const [selectedTitle, setSelectedTitle] = useState([]);


//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
//   const query = {};
  
//   query["recipe"] = selectedTitle;

  
//   const debouncedTerm = useDebounced({
//     searchQuery: searchTerm,
//     delay: 600,
//   });

//   if (debouncedTerm) {
//     query["searchTerm"] = debouncedTerm;
//   }
//   const { data, isLoading, isFetching } = useRecipesQuery({ ...query });
//   const { data: allData } = useAllRecipesQuery(undefined);
//   const recipes = getUniqueRecipes(allData?.allRecipes?.data);

// console.log(data)


//   // Check if allData is defined before using it
//   const isLoadingAllData = !allData;

//   // const handleCheckboxTitleChange = (value) => {
//   //   const updatedStatuses = selectedTitle.includes(value)
//   //     ? selectedTitle.filter((recipe) => recipe !== value)
//   //     : [...selectedTitle, value];
//   //     setSelectedTitle(updatedStatuses);
//   // };

  

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

  

//   return (
//     <div className="min-h-screen grid grid-cols-5 gap-5 container my-10">
//       {/* left side */}
//       <div className="md:col-span-2 lg:col-span-1 md:flex flex-col gap-y-3 hidden">
//       <div className="bg-[#F5F5F5] p-4 rounded-sm">
//           <h3 className="text-xl font-semibold">Availability</h3>
//           <div className="mt-3">
//             {recipes?.map((status) => (
//               <div key={status.label} className="flex gap-x-1">
                
//                 <span>{status.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
       
       
//       </div>

//       {/* left side drawer for mobile devices */}
//       <div
//         className={`md:hidden fixed inset-y-0 left-0 z-50 bg-white w-3/4 overflow-y-auto transition-transform duration-500 transform ${
//           isDrawerOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* ... your existing left side content ... */}
//         <button
//           className="text-4xl absolute right-2 top-2 items-end"
//           onClick={toggleDrawer}
//         >
//           <IoMdClose className="p-1 bg-blue-gray-50 shadow rounded-full" />
//         </button>
//         {/* search bar */}
//         <div className="px-3 pt-20 bg-[#F5F5F5]">
//           <FormSearch />
//         </div>
       
       
      
        
      
//       </div>

//       {/* right side */}
//       <div className="col-span-5 md:col-span-3 lg:col-span-4">
//         <div className="bg-[#F5F5F5] mb-2 rounded-sm flex justify-between lg:px-10 items-center">
         
         
//         </div>
//         {isLoadingAllData || isLoading || isFetching ? (
//           <Loader />
//         ) : (
//           <div>
//             {recipes?.length > 0 ? (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
//                   {recipes.map((recipe) => (
//                   <div
//                     className="border shadow-md rounded pb-3"
//                     key={recipe.id}
//                   >
//                     <div className="overflow-hidden group">
//                       <img src={recipe?.image} alt={recipe?.title} />
//                       <div className="md:translate-y-11 translate-y-0 md:group-hover:translate-y-0 transition-all duration-500">
//                         <div className="w-full h-full flex justify-center bg-white mx-auto">
//                           <Link to={`/${recipe._id}`}>
//                             <button className="text-black bg-white px-4 py-2 border hover:border-orange">
//                               <FaRegEye className="w-6 h-6" />
//                             </button>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
                    
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <ProductNotFound />
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from 'react'
import Loader from '../../components/loader/Loader';
import { useRecipeQuery } from '../../redux/api/recipeApi';
import { Link } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';

function Home() {

  const { data, isLoading } = useRecipeQuery([]);
 
  if (isLoading) {
    return <Loader />;
  }
  console.log(data)

  return (
    <div>
      
      <div className="min-h-screen grid grid-cols-5 gap-5 container my-10">
      {/* left side */}
      {/* ... (your existing code) */}

      {/* right side */}
      <div className="col-span-5 md:col-span-3 lg:col-span-4">



        <div className="bg-[#F5F5F5] mb-2 rounded-sm flex justify-between lg:px-10 items-center">
          {/* ... (your existing code) */}
        </div>
        {isLoading  ? (
          <Loader />
        ) : (
          <div>
          
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 text-black">
              {data?.recipes?.map((recipe) => (
                  <div className="border shadow-md rounded pb-3" key={recipe.id}>
                    <div className="overflow-hidden group">
                    
                      <div className="md:translate-y-11 translate-y-0 md:group-hover:translate-y-0 transition-all duration-500">
                        <div className="w-full h-full flex justify-center bg-white mx-auto">
                          {/* Adjust the Link component as needed */}
                          <Link to={`/${recipe.id}`}>
                            <button className="text-black bg-white px-4 py-2 border hover:border-orange">
                            <h3 className="text-lg font-semibold">{recipe.title}</h3>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Add additional details or components as needed */}
                    <div>
                      <h3 className="text-lg font-semibold">{recipe.title}</h3>
                      {/* Add more details if needed */}
                    </div>
                  </div>
                ))}
              </div>
            
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Home
