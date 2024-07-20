import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageBanner from "../components/ImageBanner";
import RecipeInfoCard from "../components/RecipeInfoCard";
import DescriptionCard from "../components/DescriptionCard";
import IngredientCard from "../components/IngredientCard";
import InstructionCard from "../components/InstructionCard";
import soupImage from "../assets/soup.jpg";
import axios from "axios";
import Button from "react-bootstrap/Button";

const RecipeDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}recipe/${id}/`
        );

        setRecipe(response.data);
      } catch (error) {
        console.error(`Failed to fetch recipe detail with id ${id}:`, error);
      }
    };
    fetchRecipeDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}recipe/${id}/`
      );
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(`Failed to fetch recipe detail with id ${id}:`, error);
    }
  };

  return (
    recipe && (
      <div>
        <ImageBanner src={soupImage} title={recipe.name} />
        <div className="flex flex-row justify-center">
          <RecipeInfoCard
            infoType="Prep time"
            infoContent={`${recipe.preparation_time} minutes`}
          />
          <RecipeInfoCard
            infoType="Cooking time"
            infoContent={`${recipe.cooking_time} minutes`}
          />
          <RecipeInfoCard
            infoType="Servings"
            infoContent={`${recipe.servings} servings`}
          />
        </div>
        <div className="flex justify-center">
          <DescriptionCard
            name={recipe.name}
            description={recipe.description}
            imageSrc={soupImage}
          />
          <IngredientCard ingredients={recipe.ingredients} />
        </div>
        <div className="flex justify-center">
          <InstructionCard instructions={recipe.instructions} />
        </div>
        <Button
          className="w-40 h-12 mb-24 rounded-xl border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          className="w-40 h-12 mb-24 mx-7 rounded-xl border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
          onClick={handleDelete}
        >
          Delete Recipe
        </Button>
      </div>
    )
  );
};

export default RecipeDetailPage;
