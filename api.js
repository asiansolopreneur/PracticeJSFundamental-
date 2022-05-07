
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