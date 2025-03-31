document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("btn");
  const searchInput = document.getElementById("search-input");
  const mealContainer = document.getElementById("meal");
  const mealDetails = document.querySelector(".meal-details");
  const recipeCloseBtn = document.getElementById("recipe-closeBtn");

  
  async function fetchMeals(ingredient) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await res.json();
      displayMeals(data.meals);
  }

  
  function displayMeals(meals) {
      mealContainer.innerHTML = ""; 
      if (!meals) {
          mealContainer.innerHTML = "<p>No meals found. Try another ingredient!</p>";
          return;
      }
      meals.forEach(meal => {
          const mealDiv = document.createElement("div");
          mealDiv.classList.add("meal-item");
          mealDiv.innerHTML = `
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="meal-name">
                  <h3>${meal.strMeal}</h3>
                  <a href="#" class="recipe-btn" data-id="${meal.idMeal}">Get Recipe</a>
              </div>
          `;
          mealContainer.appendChild(mealDiv);
      });
  }

  async function fetchMealDetails(mealID) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
      const data = await res.json();
      displayMealDetails(data.meals[0]);
  }

  function displayMealDetails(meal) {
      mealDetails.querySelector(".recipe-title").innerText = meal.strMeal;
      mealDetails.querySelector(".recipe-category").innerText = `Category: ${meal.strCategory}`;
      mealDetails.querySelector(".recipe-instruct").innerHTML = `<h3>Instructions:</h3><p>${meal.strInstructions}</p>`;
      mealDetails.querySelector(".recipe-meal-image img").src = meal.strMealThumb;
      mealDetails.querySelector(".recipe-link a").href = meal.strYoutube;
      mealDetails.style.display = "block";
  }

  searchBtn.addEventListener("click", () => {
      const ingredient = searchInput.value.trim();
      if (ingredient) fetchMeals(ingredient);
  });

  mealContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("recipe-btn")) {
          const mealID = e.target.getAttribute("data-id");
          fetchMealDetails(mealID);
      }
  });

  recipeCloseBtn.addEventListener("click", () => {
      mealDetails.style.display = "none";
  });
});
