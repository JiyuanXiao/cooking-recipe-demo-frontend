import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeContextProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const initializeContext = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}recipes/`
        );

        setRecipes(response.data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    initializeContext();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
};
