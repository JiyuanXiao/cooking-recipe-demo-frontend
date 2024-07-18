import React from "react";
import { useParams } from "react-router-dom";
import ImageBanner from "../components/ImageBanner";
import RecipeInfoCard from "../components/RecipeInfoCard";
import DescriptionCard from "../components/DescriptionCard";
import IngredientCard from "../components/IngredientCard";
import InstructionCard from "../components/InstructionCard";
import soupImage from "../assets/soup.jpg";

const RecipeDetailPage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <ImageBanner src={soupImage} title="Title" />
      <div className="flex flex-row justify-center">
        <RecipeInfoCard infoType="Prep time" infoContent={`25 minutes`} />
        <RecipeInfoCard infoType="Cooking time" infoContent={`60 minutes`} />
        <RecipeInfoCard infoType="Servings" infoContent={`4 serving`} />
      </div>
      <div className="flex justify-center">
        <DescriptionCard
          name="recipe name"
          description="Risus ad aliquet malesuada convallis odio habitasse. Ac himenaeos vitae ex ultrices dictum pellentesque malesuada eget donec velit taciti."
          imageSrc={soupImage}
        />
        <IngredientCard />
      </div>
      <div className="flex justify-center">
        <InstructionCard />
      </div>
    </div>
  );
};

export default RecipeDetailPage;
