let dogs = [
    
    { 
        name: "boerbull",
        price: "$2000",
        breed_name: "boerbull"
    },
    { 
        name: "bulldog",
        price: "$200",
        breed_name:"bulldog"
    },
    { 
        name: "chihuahua",
        price: "$200",
        breed_name:"chihuahua"
    },
    { 
        name: "dalmatian",
        price: "$40000",
        breed_name:"Dalmatian"
    },
    { 
        name: "german shepherd",
        price: "$1200",
        breed_name:"germanshepherd"
    },
    { 
        name: "golden retreiver",
        price: "$525200000",
        breed_name:"goldenretreiver"
    },
    { 
        name: "greyhound",
        price: "$300",
        breed_name:"greyhound"
    },
    { 
        name: "ovcharka",
        price: "$80000",
        breed_name:"ovcharka"
    },
    { 
        name: "pitbull",
        price: "$2300",
        breed_name:"pitbull"
    },
    { 
        name: "rotweiler",
        price: "$742400",
        breed_name:"rotweiler"
    },
    { 
        name: "siberian husky",
        price: "$562140",
        breed_name:"siberianhusky"
    },
    { 
        name: "yorkshire terrier",
        price: "$3700",
        breed_name: "YorkshireTerriers"
    },

];

let dogBreeds = document.querySelector('.row2')
let loop = ``;

dogs.forEach( breeds => {
    loop += `
     <div class="col-12 col-md-12 col-lg-3 py-5">

      <div class="breed-ground text-capitalize text-center custom-bg border-0 rounded">
        <h4 class="py-1 text-white">${breeds.name}</h4>
        <div class="breed-img">
          <img src="./img/${breeds.breed_name}.jpg" alt="dog" class="img-fluid imgs">
        </div>
        <p class="fs-3 py-1   text-danger">${breeds.price}</p>      
      </div>
    </div>
    </div>
    
    
    `;
   dogBreeds.innerHTML = loop;
});

