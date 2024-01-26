// Constructor for Food objects
function Food(name, calories) {
    this.name = name;
    this.calories = parseInt(calories); // Forces the input value to be treated as a number, not a string
}

// Initialize an empty array to store food objects
let foodArray = [];
let totalCalories = 0;

//Function to add a new food item
function addFoodItem() {
    // Get user input values
    const name = document.getElementById("foodName").value;
    const calories = document.getElementById("calories").value;

    // Check if inputs are not empty
    if (name && calories) {
       // Create a new food object using the constructor
       const foodItem = new Food(name, calories);

        // Add the food object to the array
        foodArray.push(foodItem);

        // Update total calories
        totalCalories += foodItem.calories;


        // Log the updated contents of the array to the console
        console.log("Updated food array:", foodArray);

        // Update the display with total calories
        totalCaloriesContainer.innerText = totalCalories;

        // Clear input fields for the next entry
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";
    } else {
        alert('Please enter both food name and calories.');
    }
}
