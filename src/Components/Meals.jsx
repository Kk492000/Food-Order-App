import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
      alert("something went wrong");
    }

    const meals = await response.json();
    setLoadedMeals(meals);
  }
  useEffect(() => {
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
