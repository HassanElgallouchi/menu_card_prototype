// fonction constructice de notre objet ContentManager
function ContentManager(products) {
    this.products = products;
}

// Methode generateProductsCards que l'on rattache a notre objet ContentManager via son prototype
ContentManager.prototype.generateProductsCards = function () {

    // cibler l'element du dom dans lequel on va injecter les données -->
    let demo = document.querySelector("#demo");
    let result = "";

    // boucler sur nos données -->
    this.products.forEach(element => {
        // console.log(element);

        // generer la structure html comme indiquer dans index.html en incluant les données dans chaque element html qui correspond  -->
        result += `
            <figure>
                <img alt='A Taste of the Kitchen'
                    src='${element.img}'>
                <figcaption>
                    <h3>${element.title}</h3>
                    <span class='tag'>${element.subtitle}</span>
                    <p>${element.resume}</p>
                    <div class='rating'>
                        ${moyenne()}
                    </div>
                </figcaption>
            </figure>
        `;


        // Faire appel a la methode ratingAverage pour generer le nombre de span correspondant a la moyenne de chaque product -->
        function moyenne() {
            let stars = "";
            for (let index = 0; index < contentManager.ratingAverage(element.ratings); index++) {
                stars += `<span class='fa fa-star'></span>`;
            }
            return stars;
        }
    });



    // Injecter les données dans l'element du dom cibler au préalable -->
    demo.innerHTML = result;
}

// Methode qui retourne la moyenne des notes attribuer a un product
ContentManager.prototype.ratingAverage = function (ratings) {
    let total = ratings.reduce((ratingTotal, ratingCurrent) => ratingTotal + ratingCurrent) / ratings.length
    return Math.floor(total);
}



// Ici on instancie un objet ContentManager en fesant appel a sa methode constructice
let contentManager = new ContentManager([
    { title: "Pizza Reine", subtitle: "Served Family Style", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "http://img.aujourdhui.com/recipe/pizza-215x320.jpg", ratings: [5, 3, 5, 4, 5, 3, 4, 5] },
    { title: "Carpaccio de bœuf aux herbes", subtitle: "From the land of Italy", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "http://img.aujourdhui.com/recipe/carpaccio-215x320.jpg", ratings: [2, 3, 1, 4, 2, 3, 4, 5] },
    { title: "Fondue aux poireaux ", subtitle: "Seasonal Ingredients", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "http://img.aujourdhui.com/recipe/fondue-poireaux-hiver_215x320.jpg", ratings: [1, 3, 1, 4, 4, 3, 4, 2] }
]);





contentManager.generateProductsCards();





// document.getElementById('demo').innerHTML = `
// <figure>
//                     <img alt='A Taste of the Kitchen'
//                         src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/first-course.jpg'>
//                     <figcaption>
//                         <h3>A Taste of the Kitchen</h3>
//                         <span class='tag'>Served Family Style</span>
//                         <p>Possimus deserunt nisi perferendis, consequuntur odio et aperiam, est, dicta dolor itaque sunt
//                             laborum, magni qui optio.</p>
//                         <div class='rating'>
//                             <span class='fa fa-star'></span>
//                             <span class='fa fa-star'></span>
//                             <span class='fa fa-star'></span>
//                             <span class='fa fa-star'></span>
//                             <span class='fa fa-star'></span>
//                         </div>
//                     </figcaption>
//                 </figure>
// `;

