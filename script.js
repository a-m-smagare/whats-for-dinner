document.addEventListener("DOMContentLoaded", function() {
    const dietButtons = document.querySelectorAll(".choice-one");
    let chosenProtein = "";
    let chosenSide = "";

    dietButtons.forEach(button => {
        button.addEventListener("click", function() {
            dietButtons.forEach(btn => {
                btn.classList.add("fade-out");
            });

            setTimeout(() => {
                dietButtons.forEach(btn => {
                    btn.classList.add("d-none");
                });
                if (button.id === "carnivore") {
                    document.querySelector(".options-carnivore").classList.remove("d-none");
                } else if (button.id === "vegetarian") {
                    document.querySelector(".options-vegetarian").classList.remove("d-none");
                } else if(button.id === "vegan") {
                    document.querySelector(".options-vegan").classList.remove("d-none");
                };
            }, 500);
        });
    });

    const optionsCarnivore = document.querySelectorAll(".choice-two-carnivore");

    optionsCarnivore.forEach(button => {
        button.addEventListener("click", function() {
            optionsCarnivore.forEach(btn => {
                btn.classList.add("fade-out");
                chosenProtein = button.id;
            });

            setTimeout(() => {
                optionsCarnivore.forEach(btn => {
                    btn.classList.add("d-none");
                });
                
                const openSideOptions = document.querySelector(".options-side").classList.remove("d-none");
            }, 500);
        });
    });

    const optionsVegetarian = document.querySelectorAll(".choice-two-vegetarian");

    optionsVegetarian.forEach(button => {
        button.addEventListener("click", function() {
            optionsVegetarian.forEach(btn => {
                btn.classList.add("fade-out");
                chosenProtein = button.id;
            });

            setTimeout(() => {
                optionsVegetarian.forEach(btn => {
                    btn.classList.add("d-none");
                });

                const openSideOptions = document.querySelector(".options-side").classList.remove("d-none");
            }, 500);
        });
    });
    
    const optionsVegan = document.querySelectorAll(".vegan-choice-two");

    optionsVegan.forEach(button => {
        button.addEventListener("click", function() {
            optionsVegan.forEach(btn => {
                btn.classList.add("fade-out");
                chosenProtein = button.id;
            });

            setTimeout(() => {
                optionsVegan.forEach(btn => {
                    btn.classList.add("d-none");
                });

                const openSideOptions = document.querySelector(".options-side").classList.remove("d-none");
            }, 500);
        });
    });

    const optionsSide = document.querySelectorAll(".choice-three");
    
    optionsSide.forEach(button => {
    button.addEventListener("click", function() {
        chosenSide = button.id;

        alert(`You chose ${chosenProtein} and ${chosenSide}, yummy! You are being redirected to a recipes site!`);
        if (chosenProtein === "tofu-vegan" || chosenProtein === "chickepeas-vegan" || chosenProtein === "lentils-vegan") {
            const veganRecipeURL = `https://www.bbcgoodfood.com/search?q=${chosenProtein}%2C+${chosenSide}&tab=recipe&mealType=dinner&diet=vegan&ratings=gte-4`;
            window.location.href = veganRecipeURL;
        } else {
        const recipeURL = `https://www.bbcgoodfood.com/search?q=${chosenProtein}%2C+${chosenSide}&tab=recipe&mealType=dinner&ratings=gte-4`;
        window.location.href = recipeURL;
        }
    });
});
});

