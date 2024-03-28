let getdiv =document.getElementById('getdiv')
let getsarch =document.getElementById('search')
let news =() =>{


  
fetch(`https://newsapi.org/v2/everything?q=${getsarch.value}&from=2024-02-28&sortBy=publishedAt&apiKey=4e6c4ab94bfa41f48524f3ef00d3c23c`)
.then(res => res.json())
.then( res =>{

  for(let i = 0; i < res.articles.length; i++) {
    getdiv.innerHTML +=  `<div class="card  m-5" style="width: 18rem;">
    <img src=" ${res.articles[i].urlToImage}     " class="card-img-top" alt="...">
    <div class="card-body  ">
      <h5 class="card-title">    </h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`

  }
})

}

