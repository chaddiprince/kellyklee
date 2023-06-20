<script>

const xano_input = 
    {
 		site: "expert_insure",
		path: "experts",
 		segement: "Personal",
		product: 2,
 		zip_code: "80222",
 		state: "CO"
  
      };

var query = $.param(xano_input);


// Create a variable for the API endpoint. In this example, we're accessing Xano's API
let xanoUrl = new URL('https://x8ki-letl-twmt.n7.xano.io/api:fpYP6g49/');

// Define a function (set of operations) to get restaurant information.
// This will use the GET request on the URL endpoint
function getExperts() {

    // Create a request variable and assign a new XMLHttpRequest object to it.
    // XMLHttpRequest is the standard way you access an API in plain Javascript.
    let request = new XMLHttpRequest();

    // Define a function (set of operations) to get restaurant information.
    // Creates a variable that will take the URL from above and makes sure it displays as a string. 
    // We then add the word 'restaurant" so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/restaurant
    let url = xanoUrl.toString() + 'expert_ad_list' + '?' + query;


    // Remember the 'request' was defined above as the standard way to access an API in Javascript.
    // GET is the verb we're using to GET data from Xano
    request.open('GET', url, true)

    // When the 'request' or API request loads, do the following...
    request.onload = function() {

        // Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)
       

        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
        if (request.status >= 200 && request.status < 400) {
        

            // Map a variable called cardContainer to the Webflow element called "Cards-Container"
            const cardContainer = document.getElementById("experts")

            // This is called a For Loop. This goes through each object being passed back from the Xano API and does something.
            // Specifically, it says "For every element in Data (response from API), call each individual item restaurant"
            data.experts.forEach(expert => {
                // For each restaurant, create a div called card and style with the "Sample Card" class
                const style = document.getElementById('expert_grid')
                // Copy the card and it's style
                const card = style.cloneNode(true)

                card.setAttribute('id', '');
                card.style.display = 'float';

                // When a restuarant card is clicked, navigate to the item page by passing the restaurant id
                card.addEventListener('click', function() {
                    document.location.href = "/item?id=" + expert.id;
                });

                // For each restaurant, Create an image and use the restaurant image coming from the API
             const img = card.getElementsByClassName('pic')[0]
             img.src = expert.photo.url + "?tpl=big:box";         

             const h3 = card.getElementsByTagName('H3')[0]
             h3.textContent = expert.name;
             
             const company = card.getElementsByClassName('expert_company')[0]
             company.textContent = expert._company.name; 
             
             const title = card.getElementsByClassName('title')[0]
             title.textContent = expert.title; 
             
             const city = card.getElementsByClassName('location_city')[0]
             city.textContent = expert._location.city;
             
             const state = card.getElementsByClassName('location_state')[0]
             state.textContent = expert._location.state;
             
             const years = card.getElementsByClassName('agent_since')[0]
             years.textContent = expert.years;
             
             //const expertise = card.getElementsByClassName('expertise')[0]
             //expertise.textContent = expert.target_product_id.expertise.product;

                // For each restaurant, create an paragraph and set the text content to the restaurant's description
               // const p = card.getElementsByTagName('P')[0]
             //   p.textContent = `${expert.description.substring(0, 240)}` // Limit to 240 chars

                // Place the card into the div "Cards-Container" 

                cardContainer.appendChild(card);
            })
        }
    }

    // Send Restaurant request to API
    request.send();
}



// This fires all of the defined functions when the document is "ready" or loaded
(function() {
    getExperts();
})();


function getProducts() {

    // Perform an API request to get products from API
    let ProductRequest = new XMLHttpRequest()

    ProductRequest.open('GET', xanoUrl.toString() + 'product', true);
    
    // When the 'request' or API request loads, do the following...
	ProductRequest.onload = function () {

		// Store what we get back from the  API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)
        
        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
		if (ProductRequest.status >= 200 && ProductRequest.status < 400) {

            // This loop goes through each object being passed back from the product API and creates an element called
            // product. 
			data.forEach(product => {
                
				// For each product, create a list element and style with the "Sample Product" class
                const item = document.createElement('li')
                item.setAttribute('class', 'sample-product');

                // For each Product, Set an item an ID so we can manipulate it.
				item.setAttribute('id', 'product-' + product.id);
				
				// We clear any previous product that exists so we can generate new ones.
				item.innerText = product.product;


				item.addEventListener("click", function (event) {
					// When you click on any of the products, you'll get the product item that is clicked as an id called
					// product-(product id number). We want to take JUST the ID of the clicked product. Apply the selected
					// class and remove it from the the All products button
					let id = parseInt(event.target.id.split('-')[1]);
					if (productArray.includes(id)) {
						productArray.splice(productArray.indexOf(id), 1);
						event.target.classList.remove('selected');
					} else {
						productArray.push(id);
						document.getElementById("product-all").classList.remove('selected');
						event.target.classList.add('selected');
					}
					// With all of this set, we get the reaturants again with the productArray populated correctly
					getExperts();
				});
				// We append the categories to the ID product container
				document.getElementById("product-Container").appendChild(item);
			});
		}
	}
	// Send product request to API
	ProductRequest.send();
}

(function () {
	const all = document.getElementById("product-all")
	all.addEventListener("click", function (event) {
		ResetCategoryFilters();
		// Adds the selected back on that got reset by ResetCategoryFilters
		document.getElementById("product-all").classList.add('selected');
	});
	getProducts();
})();

</script>