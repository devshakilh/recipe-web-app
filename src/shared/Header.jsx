
import { Link } from "react-router-dom";

import { FcFlashOn } from "react-icons/fc";

import { BiSolidMessageAltAdd } from "react-icons/bi";

import FormSearch from "./FormSearch";




const Header = () => {
 
  
 



  
  return (
    <div className="bg-[#2C95C0] py-3">
      {/* main content */}
      <div className="container">
        <div className="flex justify-between items-center text-white">
          {/* mobile toggle bar */}
         
          {/* logo */}
          <a className="uppercase lg:mr-auto" href="/">
            RECIPE
          </a>
          {/* search bar */}
          <div className="w-1/2 px-10 hidden md:block">
            <FormSearch />
          </div>
          {/* mobile cart bar */}
         
         
          <div className="hidden lg:flex gap-5">
            <div className="flex items-center gap-3">
            
              <div>
                <h2 className="text-[16px] font-normal">Offer</h2>
                <p className="text-[12px]">latest offer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FcFlashOn className="w-6 h-6 animate-pulse" />
              <div>
                <h2 className="text-[16px] font-normal">Mobile Deal</h2>
                <p className="text-[12px]">Special Deals</p>
              </div>
            </div>
            RECIPE
           
            
          </div>
          {/* mobile navber */}
          <div className="fixed bottom-0 left-0 px-5 py-2 lg:hidden flex justify-between w-full gap-3 bg-primaryColor z-50">
            <div className="flex flex-col items-center">
            
              <div>
                <h2 className="text-[12px] font-normal">Offer</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FcFlashOn className="w-4 h-4 animate-pulse" />
              <div>
                <h2 className="text-[12px] font-normal">Mobile Deal</h2>
              </div>
            </div>
            <Link to="#" className="flex flex-col items-center">
              <BiSolidMessageAltAdd className="w-4 h-4" />
              <div>
                <h2 className="text-[12px] font-normal">Buy Mobile</h2>
              </div>
            </Link>
           
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default Header;
