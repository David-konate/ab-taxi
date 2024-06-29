"use client";
import React from "react";
import Block1 from "./assets/components/home/Block1";
import Block2 from "./assets/components/home/Block2";
import Block3 from "./assets/components/home/Block3";
import Block4 from "./assets/components/home/Block4";
import Block5 from "./assets/components/home/Block5";
import Block6 from "./assets/components/home/Block6";
import Footer from "./assets/components/Footer";

const Home = () => {
  return (
    <div className="w-full  absolute left-0">
      <div className=" block1 p-4">
        <Block1 />
      </div>
      <div className="p-2 sm:p-5">
        <Block2 />
      </div>
      <div
        className="p-2 sm:p-5"
        style={{
          backgroundImage: "url(/train.webp)", // Chemin relatif vers votre image dans public/
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Image fixe pendant le défilement
        }}
      >
        <Block3 />
      </div>
      <div className="p-5">
        <Block6 />
      </div>
      <div className="p-5">
        <Block4 />
      </div>
      <div className="p-2 sm:p-5">
        <Block5 />
      </div>
      <div className="absolute mt-8 w-full left-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
