// Initialize an empty array to store food objects
let foodArray = [];
let totalCalories = 0;

function addFoodItem() {
    // Get user input values
    const name = document.getElementById("foodName").value;
    const calories = parseInt(document.getElementById("calories").value);

    // Create a new food object
    const foodItem = {
        name: name,
        calories: calories
    };

    // Add the food object to the array
    foodArray.push(foodItem);

    // Update total calories
    totalCalories += calories;

    // Log the updated contents of the array to the console
    console.log("Updated food array:", foodArray);

    // Update the display with total calories
    totalCaloriesContainer.innerText = totalCalories;

    // Clear input fields for the next entry
    document.getElementById("foodName").value = "";
    document.getElementById("calories").value = "";
}