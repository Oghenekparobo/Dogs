let food = [
    {
        food_name: "buffalo",
        food_img:   "buffalofeed"
    },
    {
        food_name: "dried",
        food_img:   "driedfeed"
    },
    {
        food_name: "grain",
        food_img:   "grainfeed"
    },
    {
        food_name: "peak",
        food_img:   "Ziwi Peak Air-Dried Venison Recipe - 1 Lb"
    },
    {
        food_name: "pedigree",
        food_img:   "pedigreefeed"
    },
    {
        food_name: "proactive",
        food_img:   "proactivefeed"
    },

];


let foodSection = document.getElementById('food-row');
let dogFeed = '';

food.forEach(feed =>{
  dogFeed += ` 
   <div class="col-12 col-md-12 col-lg-4 py-5">

                <div class="food-ground text-capitalize text-center bg-light border-0 rounded">
                    <div class="food-img">
                        <img src="./img/${feed.food_img}.jpg" alt="food" class="img-fluid imgs">
                    </div>
                    <p class="fs-3 py-1  text-danger">${feed.food_name}</p>
                </div>
            </div>
  
  `;
    foodSection.innerHTML = dogFeed;
});
