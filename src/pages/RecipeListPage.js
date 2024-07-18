import React from "react";
import { useNavigate } from "react-router-dom";
import ImageBanner from "../components/ImageBanner";
import CreateRecipeButton from "../components/CreateRecipeButton";
import RecipeCard from "../components/RecipeCard";
import foodBannderImage from "../assets/food-banner.png";

const recipes = [
  {
    id: 1,
    title: "Recipe Title 1",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    title: "Recipe Title 2",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    title: "Recipe Title 3",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 4,
    title: "Recipe Title 3",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 5,
    title: "Recipe Title 3",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const RecipeListPage = () => {
  const navigate = useNavigate();

  const recipeList = recipes.map((recipe) => (
    <RecipeCard
      key={recipe.id}
      title={recipe.title}
      content={recipe.content}
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
