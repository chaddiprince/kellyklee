function getCategories() {

    // Perform an API request to get Categories from the Xano API
    let CategoryRequest = new XMLHttpRequest()

    // Use the GET Verb and instead of using 'restaurant' like we did above, we'll use category.
    // so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/category
    CategoryRequest.open('GET', xanoUrl.toString() + 'category', true);
    
    // When the 'request' or API request loads, do the following...
	CategoryRequest.onload = function () {

		// Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)
        
        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
		if (CategoryRequest.status >= 200 && CategoryRequest.status < 400) {

            // This loop goes through each object being passed back from the Xano Category API and creates an element called
            // category. 
			data.forEach(category => {
                
				// Instead of creating a DIV like we did in restaurant, we'll create a list item or 'li'
				// For each category, create a list element and style with the "Sample Category" class
                const item = document.createElement('li')
                item.setAttribute('class', 'sample-category');

                // For each category, Set an item an ID so we can manipulate it.
				item.setAttribute('id', 'category-' + category.id);
				
				// We clear any previous category that exists so we can generate new ones.
				item.innerText = category.name;


				item.addEventListener("click", function (event) {
					// When you click on any of the categories, you'll get the category item that is clicked as an id called
					// category-(category id number). We want to take JUST the ID of the clicked category. Apply the selected
					// class and remove it from the the All categories button
					let id = parseInt(event.target.id.split('-')[1]);
					if (categoryArray.includes(id)) {
						categoryArray.splice(categoryArray.indexOf(id), 1);
						event.target.classList.remove('selected');
					} else {
						categoryArray.push(id);
						document.getElementById("category-all").classList.remove('selected');
						event.target.classList.add('selected');
					}
					// With all of this set, we get the reaturants again with the categoryArray populated correctly
					getRestaurants();
				});
				// We append the categories to the ID category container
				document.getElementById("Category-Container").appendChild(item);
			});
		}
	}
	// Send Category request to API
	CategoryRequest.send();
}

