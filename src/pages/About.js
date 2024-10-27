import React from "react";

function About() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <img
        className=" absolute left-[40%] bottom-0 h-full blur-[6px] BouncInOut"
        src="/beverage1.png"
      />
      <div className="bg-[#001c0f75] absolute top-0 left-0 w-full h-full z-20">
        {" "}
      </div>
      <div className="w-full z-30 relative h-full pr-[25%] flex items-center pl-[5%]">
        <div>
          <h3 className="text-secondary text-[2.5rem] font-bold">
            {" "}
            STARBUCKS IS...{" "}
          </h3>
          <h1 className="text-[5.5rem] leading-[5rem] font-light text-white uppercase mb-10">
            {" "}
            Start Your Day,
            <span className="block font-bold  "> Starbucks Way</span>{" "}
          </h1>
          <p className="text-white text-[1.6rem] leading-[2.5rem] w-2/3 font-light">
            At Starbucks, we believe in the power of connection. Whether through
            a simple smile from a barista or the shared joy of a morning coffee
            ritual, we strive to create welcoming spaces for everyone, one cup
            at a time.
          </p>
        </div>
      </div>
      <div className=" absolute z-30 flex justify-center items-center rounded-full w-[600px] h-[600px] left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          className=" absolute w-[180px] right-0 bottom-0 -translate-x-1/2 -translate-y-1/3 z-30"
          src="/beans.png"
        />
        <img
          className="ShadoImage  h-[120%] blur-[2px] duration-1000"
          src="/beverage1.png"
        />
      </div>
    </div>
  );
}

export default About;
