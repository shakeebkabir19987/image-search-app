// const accesskey = "bMuwrIe5k0e9bMoxs9P9-4k-Y2m4qBiqNFb1Uwh2ixI";
// // const secretkey=G_Su2Q-vX7QmcX5OCa4laODyeBLhZGwRVZVtSfKKXQs
// let page = 1;
// let inputData = "montain";
// async function fetchApi() {
//   let result = await fetch(
//     `https://api.unsplash.com/photos/?client_id=${accesskey}`
//   );
//   let finaldata = await result.json();
//   console.log(finaldata);
// }
// fetchApi();

const accesskey = "bMuwrIe5k0e9bMoxs9P9-4k-Y2m4qBiqNFb1Uwh2ixI"
const formEl= document.querySelector("form");
const inputEl= document.getElementById("search-input");
const searchResults= document.querySelector(".search-results")
const showMore= document.getElementById("show-more-button")

const searchbtn=document.getElementById("search-btn")

let inputData="";
let page=1;
async function searchImages(){
    inputData= inputEl.value
   const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

  const responce= await fetch(url)
  const data= await responce.json()

  const results=data.results

  if (page===1){
    searchResults.innerHTML=""
  }

  // Inside the searchImages() function, modify the creation of the anchor link as follows:

// Inside the searchImages() function, modify the creation of the anchor link and description as follows:

results.map((result) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('search-result');
    
    const imageLink = document.createElement('a'); // Create the anchor link element
    imageLink.href = result.links.html; // Set the href attribute to the image's link
    imageLink.target = '_blank'; // Open link in a new tab
    imageWrapper.appendChild(imageLink); // Append the link to the image container
    
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    imageLink.appendChild(image); // Append the image to the anchor link
  
    const description = document.createElement('div'); // Create a div for the description
    description.classList.add('description'); // Add the 'description' class to the div
    description.textContent = result.alt_description; // Set the description text
    imageWrapper.appendChild(description); // Append the description to the image container
  
    searchResults.appendChild(imageWrapper);
  });
  
  page++;
  if(page>1){
    showMore.style.display="block";
  }

  }

  formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page= 1
    searchImages()
  })

  showMore.addEventListener("click",()=>{
    searchImages();
  })