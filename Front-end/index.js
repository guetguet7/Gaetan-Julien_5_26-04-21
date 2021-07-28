fetch('http://localhost:3000/api/cameras')
.then(response => response.json()) 
.then(data => {
    datas(data);
})
.catch(function(err) {
    //console.log("erreur")
});

function datas(data) {
    const container = document.getElementById("container");
    for (let i = 0; i < data.length; i++)
    
    container.innerHTML += (`
    <article id="cards-Product" ">
        <img src=${data[i].imageUrl} alt="photos produits"/>
        <div class="Description-Produit">
            <h2> ${data[i].name}</h2>
            <p>${data[i].price}€</p>
        </div>
        <p>${data[i].description}</p>
        <a href="./Produit.html?id=${data[i]._id}">En savoir plus</a>
    </article>`
    )};

