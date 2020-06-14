// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

//    creating elements 

const headerDiv = document.createElement('div');
const headerSpan1 = document.createElement('span');
const headerTitle = document.createElement('h1');
const headerSpan2 = document.createElement('span');


// appending elements 

headerDiv.appendChild(headerSpan1);
headerDiv.appendChild(headerTitle);
headerDiv.appendChild(headerSpan2);

//class Listing

headerDiv.classList.add('header');
headerSpan1.classList.add('date');
headerSpan2.classList.add('temp');

// textContent

headerSpan1.textContent = 'MARCH 28, 2019';
headerTitle.textContent = 'Lambda Times';
headerSpan2.textContent = '98°';

return headerDiv;
};

headerContent = document.querySelector('.header-container');
headerContent.appendChild(Header());