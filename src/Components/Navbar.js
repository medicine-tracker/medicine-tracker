import React from "react";
function Navbar() {
  return (
    <>
      <div className="flex mx-[10vw] py-3 mt-4 relative">
        <div className="flex items-center justify-center">Logo</div>
        <div className="flex ml-auto text-slate-600 font-semibold space-x-6 items-center justify-center">
          <div className=" nav-links">About Us</div>
          <div className=" nav-links ">Service</div>
          <div className="nav-links ">Help</div>
          <div className="bg-[#85e7cf] px-8 py-2 rounded-full cursor-pointer font-semibold hover:bg-[#78d0ba] ">
            Login
          </div>
        </div>
        <div className="blurr absolute -top-32 -right-[25vw]"> </div>
      </div>
    </>
  );
}

export default Navbar;
