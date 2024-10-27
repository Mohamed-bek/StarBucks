import React, { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Home() {
  const [animate, setAnimate] = useState(false);
  const [MainBeverages, setMainBeverages] = useState([
    {
      name: "FRAPUCCINO",
      subName: null,
      image: "/beverage1.png",
    },
    {
      name: "BANANA",
      subName: "MOCHA",
      image: "/beverage2.png",
    },
    {
      name: "Strawberry",
      subName: "Funnel",
      image: "/beverage4.png",
    },
    {
      name: " Midnight",
      subName: "Mocha",
      image: "/beverage5.png",
    },
  ]);
  const [MainBeve, setMainBeve] = useState(MainBeverages[0]);
  useEffect(() => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, [20]);
  }, [MainBeve]);
  return (
    <div className="w-full bg-primary min-h-[100dvh]">
      <div className="relative z-40 w-full h-[100dvh]">
        <div className="w-full h-full absolute top-0 left-3/4 rounded-[80px] bg-secondary">
          <img
            className="w-[270px] absolute top-1/2 -translate-y-[70%] left-1/4 -translate-x-[70%] blur-sm"
            src="/beans.png"
          />
        </div>
        <div className="w-full h-full relative z-50 flex justify-around items-center">
          <div className="w-1/2 pl-[5%] h-full pt-[10%]">
            <h3 className="text-secondary text-[2.5rem] font-bold">
              {" "}
              STARBUCKS IS...{" "}
            </h3>
            <h1 className="text-[6rem] text-white uppercase font-light leading-[6rem] mb-10">
              {" "}
              <span className="block">
                {" "}
                Pure <span className="font-extrabold"> Love </span>{" "}
              </span>
              <span className="block">
                {" "}
                <span className="font-extrabold"> OF </span> Coffe{" "}
              </span>
            </h1>
            <div className="flex gap-10 items-center">
              <button className="flex gap-3 ShadoBotton text-[1.4rem] font-bold items-center py-3 bg-secondary rounded-full text-white cursor-pointer px-8">
                {" "}
                <MdAddShoppingCart className="text-[2.1rem]" /> Order Now{" "}
              </button>
              <button className="flex gap-3 text-[1.4rem] font-bold items-center py-3 bg-white rounded-full text-secondary cursor-pointer px-8">
                {" "}
                <IoLocationOutline className="text-[2.1rem]" />{" "}
                <span className="text-black">Find Store </span>
              </button>
            </div>
            <div className="flex gap-5 items-center mt-5">
              {MainBeverages.map((beverage, i) => (
                <div
                  className="w-[120px] flex justify-center items-center cursor-pointer"
                  onClick={() => setMainBeve(MainBeverages[i])}
                >
                  <img
                    className="w-full ShadoImageSlider"
                    src={beverage.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 flex items-center pl-0 h-full">
            <img
              className={`w-[65%] scale-0 -translate-x-[5%] ShadoImage ${
                animate ? "BouncIn" : ""
              }`}
              src={MainBeve.image}
            />
            <div className="w-[30%] relative h-full">
              <div className="absolute pt-10 px-1 uppercase bottom-0 left-[180px] origin-bottom-left w-[100vh] text-center -rotate-90 font-extrabold">
                <h1
                  className={`text-[6rem] leading-[2rem] text-white translate-x-[130%] ${
                    animate ? "HeadDonw" : ""
                  }`}
                >
                  {" "}
                  {MainBeve.name}
                </h1>
                <h1
                  className={`text-[6rem] TextWhite -translate-x-[130%] ${
                    animate ? "HeadDonw" : ""
                  }`}
                >
                  {" "}
                  {MainBeve.subName ? MainBeve.subName : MainBeve.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute z-10 left-0 top-0 h-full w-full bg-[#001c0fb3]">
        {" "}
      </div>
      <div className=" absolute left-0 top-0 h-full w-full bg-[#001c0f34] z-30">
        {" "}
      </div>
      <div className="w-[120px] h-[120px] absolute -left-10 top-10 z-20">
        {" "}
        <img className="w-full blur-[6px]" src="/beans.png" />{" "}
      </div>
      <div className="w-[320px] absolute right-1/2 translate-x-1/3 top-1/2 -translate-y-1/2">
        {" "}
        <img className="w-full blur-[6px]" src="/beverage5.png" />{" "}
      </div>
      <img
        src="/beverage6.png"
        className="w-[300px] absolute left-0 z-20 -translate-x-1/3 top-1/3 blur-sm rotate-45"
      />
    </div>
  );
}

export default Home;
