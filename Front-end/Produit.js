const idurlParams = document.location.search;
//  console.log(idurlParams);

 const idParams = new URLSearchParams(idurlParams);
 console.log(idParams);

 const leId = idParams.get("id");
 console.log(leId);


fetch("http://localhost:3000/api/cameras/" + leId)
.then(response => response.json())
.then(camera =>{
    product(camera);
})
.catch(function(err) {
//    console.log("erreur"); 
}) 

function product(camera) {

    const main = document.getElementById("ProduitCamera");
    
   // console.log(camera);

    let selectlenses = document.getElementById("objectifs");
    camera.lenses.forEach( objectifs => {
        option.setAttribute("value");
    });

    

    main.innerHTML += (` 
    <article>
        <img src="${camera.imageUrl}" alt="">
        <div class="description">
            <h2>${camera.name}</h2>
            <p class="price">${camera.price / 100}€</p>
        </div>
        <p class="descri">${camera.description}</p>

        <form>
            <label for='options lenses'>choisir l'option :</label>
            <select name="options_lenses" id="objectifs">
                <option value="lenses1">${camera.lenses}</option>
                <option value="lenses2">${camera.lenses}</option>
                <option value="lenses3">${camera.lenses}</option>
            </select>
        </form>

        <button id="id-envoyer" type="submit" name="btn-envoyer">Ajoutez au panier</button>
    </article>
    `)

};  


