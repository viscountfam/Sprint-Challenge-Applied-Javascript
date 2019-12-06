// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let entrypoint = document.querySelector('.topics')
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) => {
        // console.log(response);
        response.data.topics.forEach(item =>{
            entrypoint.appendChild(TabMaker(item));
        })
    }).catch((err) => {
        console.log(err);
    });

function TabMaker(data) {
    const
        div = document.createElement("div");

    //add class
    div.classList.add("tab")

    //add text content
    div.textContent = data;

    return div;
}