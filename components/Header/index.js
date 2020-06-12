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

    // creating 


    const headerDiv = document.querySelector('div');
    const headerSpan1 = document.querySelector('span');
    const headerTitle = document.querySelector('h1');
    const headerSpan2 = document.querySelector('span');

    // pieces appending

    headerDiv.appendChild(headerSpan1);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerSpan2);

    // classLists 

    headerDiv.classList.add('header');
    deaderSpan1.classList.add('date');
    headerSpan2.classList.add('temp');

    // Content Update 

    headerSpan1.textContent('SMARCH 28, 2019');
    headerTitle.textContent('Lambda Times');
    headerSpan2.textContent('98°');

    return headerDiv;



};

let headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());