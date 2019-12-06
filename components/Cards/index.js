// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
cardEntry = document.querySelector('.cards-container');
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((result) => {
        console.log(result);
        console.log(result.data.articles);
        console.log(Object.values(result.data.articles))
        Object.values(result.data.articles).forEach(item => {
            item.forEach(topic =>{
                        console.log(topic)
                        cardEntry.appendChild(CardMaker(topic));
                     })
        });
        // result.data.articles.forEach(item =>{
        //     item.forEach(articles =>{
        //         cardEntry.appendChild(CardMaker(articles));
        //     })
        // })
            
        });
    // .catch((err) => {
    //     console.log(err);
    // });


function CardMaker(data) {
    const
        card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imageContainer = document.createElement('div'),
         img = document.createElement('img'),
         name = document.createElement('span');

    //assign classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    //assign text content
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    name.textContent = data.authorName;

    //append children
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(img);
    author.appendChild(name);

    return card;
}