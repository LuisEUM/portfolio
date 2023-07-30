import React from "react";
import ContactModalButton from "../ui/buttons/ContactModalButton";

function Footer() {
  return (
    <div className="w-full h-[269px] flex-col justify-center items-center gap-y-10 inline-flex">
      <div className="justify-start items-start gap-4 inline-flex">
        <div className="w-6 h-6 relative shadow">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
        </div>
        <div className="w-6 h-6 relative shadow">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
        </div>
        <div className="w-6 h-6 relative shadow">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
        </div>
        <div className="w-6 h-6 relative shadow">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
        </div>
        <div className="w-6 h-6 relative shadow">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
          <img
            className="w-[16.07px] h-[16.07px] left-[4px] top-[4px] absolute"
            src="https://via.placeholder.com/16x16"
          />
        </div>
        <div className="w-6 h-6 relative shadow">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
        </div>
      </div>
      <div className="justify-start items-start gap-10 inline-flex text-white text-base font-normal">
        <p>Portfolio</p>
        <p>Blog</p>
        <p>Testimonials</p>
      </div>
      <ContactModalButton
        className="text-center text-black text-base font-bold px-7 py-2 bg-primary rounded-[30px] border border-primary justify-center items-center gap-2.5 inline-flex hover:shadow-primary/50 hover:shadow-md"
        setModalOpenNavbar={undefined}
      />

      <div className="w-full h-[0px] border border-white"></div>
      <p className="text-xs font-light pb-10">
        © 2023 Luis Urdaneta All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
