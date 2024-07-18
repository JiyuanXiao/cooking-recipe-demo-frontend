import React from "react";
//import "./ImageBanner.css";

const ImageBanner = ({ src, title, subtitile }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-8xl mb-2">{title}</h1>
        <p className="text-xl">{subtitile}</p>
      </div>
    </div>
  );
};

export default ImageBanner;
