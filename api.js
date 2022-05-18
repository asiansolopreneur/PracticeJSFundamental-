// Basic fetch Practicing 
function joy(){
     fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(post => joyBangla(post))
}

function joyBangla(datas){

const blog = document.getElementById("blog"); 

for (const data of datas){
   // console.log(data)
const li = document.createElement("li");
li.innerHTML= `<h2>${data.title}</h2>
<p>${data.body}</p>
`
blog.appendChild(li);
blog.classList.add("blogstyle")

}

}


// MEALDIBI NAKI API 
document.getElementById("mealBtn").addEventListener("click", function(){
const input= document.getElementById("mealSearch");
const inputResult = input.value;
input.value="";

if(inputResult == "" ){
   alert("Type something Delicious!")
}
else{

   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputResult}`;
fetch(url)
.then(data => data.json())
.then(data =>displayResult(data.meals))
}


})

//  Api Action in DOM

function displayResult(batas){
 const searchResult = document.getElementById("searchResult");
   
   //Clear full text Box!!
   searchResult.textContent="";

   for (const bata of batas){
      //console.log(bata)
      const div = document.createElement("div");
      div.classList.add("col");
      div.style.paddingBottom = "40px";
      div.innerHTML = `
               <div onclick=mealDetails(${bata.idMeal}); class="card">
               <img src="${bata.strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title">${bata.strMeal}</h5> 
               <p class="card-text">${bata.strInstructions.slice(0,150)}</p>
               </div>
               </div>
      
      `;
      searchResult.appendChild(div);
   }

   }

   // Single Product Information [Api Call]
   const mealDetails = mealID =>{
      
      const mealurl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
      
      fetch(mealurl)
      .then(res => res.json())
      .then(data => displayMealDetails(data.meals[0]))

   }

   
// Single Product Information [Api Action]

const displayMealDetails = mealDetails =>{
   //console.log(mealDetails);
   const mealdescription= document.getElementById("meal-detailss");
         mealdescription.textContent="";
   const divDetails = document.createElement("div");
   divDetails.classList.add("card");
   divDetails.innerHTML = `
   <img class="card-img-top" src="${mealDetails.strMealThumb}" alt="Card image cap">
   <div class="card-body">
   <h5 class="card-title">${mealDetails.strMeal}</h5>
   <p class="card-text">${mealDetails.strInstructions.slice(0,200)}</p>
   <a href="${mealDetails.strYoutube}" class="btn btn-primary">Go somewhere</a>
   </div>
   `;
   mealdescription.appendChild(divDetails);

}