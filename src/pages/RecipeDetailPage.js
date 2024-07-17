import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetailPage() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Recipe {id} Detail</h1>
    </div>
  );
}

export default RecipeDetailPage;
