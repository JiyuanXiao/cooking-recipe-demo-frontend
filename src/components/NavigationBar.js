import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <nav class="bg-red-200 border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-red-400">
            Food Recipes
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-red-200">
            <li>
              <a
                href="/"
                class="block py-2 px-3 text-white bg-red-400 rounded md:bg-transparent md:text-red-400 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Button
                className="w-40 h-12 rounded-xl border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
                onClick={() => {
                  navigate("/create");
                }}
              >
                Create Recipe
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
