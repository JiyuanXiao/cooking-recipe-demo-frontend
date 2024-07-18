import React from "react";
import ImageBanner from "../components/ImageBanner";
import foodBannderImage from "../assets/food-banner.png";

const RecipeListPage = () => {
  return (
    <div>
      <ImageBanner
        src={foodBannderImage}
        title="Food Recipes"
        subtitile="Explore our collection of recipes"
      />
    </div>
  );
};

export default RecipeListPage;
