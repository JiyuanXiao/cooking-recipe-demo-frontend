import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ImageBanner from "../components/ImageBanner";
import CreateRecipeButton from "../components/CreateRecipeButton";
import RecipeCard from "../components/RecipeCard";
import foodBannderImage from "../assets/food-banner.png";
import { RecipeContext } from "../RecipeContext";

const RecipeListPage = () => {
  const navigate = useNavigate();
  const { recipes } = useContext(RecipeContext);

  const recipeList = [...recipes].reverse().map((recipe) => (
    <RecipeCard
      key={recipe.id}
      title={recipe.name}
      content={recipe.description}
      onClick={() => {
        navigate(`/recipe/${recipe.id}`);
      }}
    />
  ));
  return (
    <>
      <div className="relative mb-28">
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
      <text className="text-4xl text-red-400">Our latest recipes</text>
      <div className="flex flex-row flex-wrap justify-center ">
        {recipeList}
      </div>
    </>
  );
};

export default RecipeListPage;
