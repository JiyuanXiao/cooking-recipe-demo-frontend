import React from "react";
//import "./ImageBanner.css";

const ImageBanner = ({ src, title, subtitile }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-8xl my-4">{title}</h1>
        <p className="text-2xl my-4">{subtitile}</p>
      </div>
    </div>
  );
};

export default ImageBanner;
