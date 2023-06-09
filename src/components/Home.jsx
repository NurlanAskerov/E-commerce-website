import React, { useEffect, useState } from "react";
import Products from "./Products";
import HeroImage from "../../public/DrawKit-Vector-Illustration-ecommerce-01 (1).svg";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoading(false);
    };
    image.src = HeroImage;
  }, []);
  return (
    <>
      <div className="w-full h-[100vh] pt-10 mt-14 ">
        <section>
          <div className="container mx-auto">
            {!isLoading ? (
              <div className="lg:flex items-center mt-24  md:mt-10">
                <div className="flex flex-wrap justify-center items-center  md:mx-auto">
                  <h1 className="font-bold text-center text-5xl p-4 mb-24 main-text">
                    Online Shopping
                    <br />
                    App
                  </h1>
                </div>
                <img className=" mx-auto  w-full lg:w-1/2" src={HeroImage} />
              </div>
            ) : (
              <div className="flex justify-center items-center h-[100vh] w-full text-3xl font-bold -mt-24">
                Loading..
              </div>
            )}
          </div>
        </section>
      </div>
      <Products />
    </>
  );
};

export default Home;
