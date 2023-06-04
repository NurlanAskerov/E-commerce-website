import React from "react";
import Products from "./Products";
import heroImage from "../../public/DrawKit-Vector-Illustration-ecommerce-01.svg"
const Home = () => {
   return(    <><div className="w-full h-[100vh] pt-10 mt-14 ">
      <section>
        <div className="container mx-auto">
          <div className="lg:flex items-center mt-24  md:mt-10">
            <div className="flex flex-wrap justify-center items-center  md:mx-auto">
              <h1 className="font-bold text-center text-5xl p-4 mb-24 main-text">
              Online Shopping<br/>App
              </h1>
            </div>
            <img
              className=" mx-auto  w-full lg:w-1/2"
              src={heroImage}
            />
          </div>
        </div>
      </section>
      
    </div>
    <Products/>
    </>
  );
};

export default Home;
