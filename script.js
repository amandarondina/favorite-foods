const meals = document.getElementById("meals");

const faveFoods = {
  breakfast: "coffee ☕",
  lunch: "sandwich 🥪",
  supper: "sushi 🍣",
};

const { breakfast, lunch, supper } = faveFoods;
const paragraph = document.createElement("p");

paragraph.innerText = `For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I usually want ${supper}.`;

meals.innerHTML = paragraph.outerHTML;

console.log(breakfast);
