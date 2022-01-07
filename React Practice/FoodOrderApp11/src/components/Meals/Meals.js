import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React from "react";

function Meals(props) {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default Meals;
