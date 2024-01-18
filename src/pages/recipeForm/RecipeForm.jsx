// components/RecipeForm.js
"use client"
import  { useState } from 'react';
import toast from 'react-hot-toast';

import { useForm } from "react-hook-form";
import { useFormRecipeMutation } from '../../redux/api/formApi';



const RecipeForm = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,    
    handleSubmit,
    reset,
  } = useForm();

  const [createRecipe, { isLoading }] = useFormRecipeMutation();

 




   const handleCreate = async (data) => {
    try {
      setLoading(true);
      const res = await createRecipe(data);
      toast.success('Recipe create successfully');
      reset();
      if (res?.data?.data?.success) {
        toast.success('Recipe create successfully');
        reset();
        window.location = "/"; 
        
      } else if (res?.data?.statusCode === 500) {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.error("Form Error: ", error);
    } finally {
      setLoading(false);
    }
  };


   return (

     <div className='my-16'>

      <form className="max-w-sm mx-auto"  onSubmit={handleSubmit(handleCreate)}>


      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Title:
        </label>
        <input
          type="text"
          id='title'
          {...register("title", { required: "Title is required" })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Title"
          required
        />
      </div>



      <div className="mb-5">
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Ingredients:
            
        </label>
        <textarea 
         {...register("ingredients", { required: "Ingredients is required" })}
        
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        
      </div>


      <div className="mb-5">
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Instructions:
        </label>

        <textarea
         {...register("instructions", { required: "Instructions is required" })}
         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
       
      </div>


      <div className="mb-5">
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Image (Optional):
           
        </label>

        <input 
        {...register("image", )}
         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
       
      </div>
   

      <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value={loading || isLoading ? "Loading..." : "Recipe"}
            type="submit"
          > Create new recipe</button>


    </form>


     </div>

   );

};

export default RecipeForm;
