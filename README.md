=== HOW TO USE API ===

===

restaurant database GET => "http://localhost:1337/api/restaurant/(username param)"

restaurant database POST => "http://localhost:1337/api/restaurant"

sample body for adding restaurant = {
username: "",
password: "",
restaurantName: "",
branch: "",
}

restaurant database PUT and DELETE => "http://localhost:1337/api/restaurant/(\_id param)"

===

ingredient database GET => "http://localhost:1337/api/ingredient/(\_id param)"

ingredient database POST => "http://localhost:1337/api/ingredient"

sample body for adding ingredient = {
<<<<<<< HEAD
name: "",
quantity: 0,
displayUnit: "",
density: 1,
totalCost: 0,
category: "",
location: "",
remarks: "",
=======

>>>>>>> fdac1b5ff633c83fb969dc55f986bdcac2c97c2e
}

ingredient database PUT and DELETE => "http://localhost:1337/api/ingredient/(\_id param)"

===

recipe database GET => "http://localhost:1337/api/recipe/(\_id param)"

recipe database POST => "http://localhost:1337/api/recipe"

sample body for adding recipe = {
name: "",
category: "",
details: "",
imageUrl: "",
recipeIngredients: [{
ingredient: _id of ingredient,
quantity: 1,
displayUnit: "gram"
}],
}

recipe database PUT and DELETE => "http://localhost:1337/api/recipe/(\_id param)"

===

NOTE: for uploading images, convert image first to base64 url string, use FileReader API alreadt built in JavaScript

URL for avatar image upload POST => "http://localhost:1337/api/upload/avatar"

body for uploading avatar = {
data: (base64 url),
username: "",
}

URL for recipe image upload POST => http://localhost:1337/api/upload/recipe

body for uploading recipe image = {
data: (base64 url),
username: "",
recipeName: "",
}
