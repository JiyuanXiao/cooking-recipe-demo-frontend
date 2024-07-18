import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<RecipeListPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/create" element={<CreateRecipePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
