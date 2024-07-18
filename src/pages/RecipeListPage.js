import React from "react";
import { useNavigate } from "react-router-dom";
import ImageBanner from "../components/ImageBanner";
import CreateRecipeButton from "../components/CreateRecipeButton";
import foodBannderImage from "../assets/food-banner.png";

const RecipeListPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <ImageBanner
        src={foodBannderImage}
        title="Food Recipes"
        subtitile="Explore our collection of recipes"
      />
      <div className="absolute bottom-0 transfrom translate-y-1/2 w-full flex justify-center">
        <CreateRecipeButton
          onClick={() => {
            navigate("/create");
          }}
        />
      </div>
    </div>
  );
};

export default RecipeListPage;
