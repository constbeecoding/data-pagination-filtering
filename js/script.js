//Global Variables

const studentList = document.querySelector('.student-list');


/* ============================================ */
/*           showPage Function                  */
/* ============================================ */
//This function will create and insert/append the elements needed to display a "page" of nine students

function showPage (list, page) {
  const firstStudent = (page * 9) - 9;
  const lastStudent = page * 9;


  studentList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    if (i >= firstStudent && i < lastStudent) {
      const studentItem = 
          `<li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
              <h3>${data[i].name.first + ' ' + data[i].name.last}</h3>
              <span class="email"> ${data[i].email}</span>
            </div>
            <div class="joined-details">
              <span class="date">${data[i].registered.date}</span>
            </div>
          </li>`
          ;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }; //if statement
  }; //for Loop
}; //function showPage


/* ============================================ */
/*          addPagination Function              */
/* ============================================ */
//This function will create and insert/append the elements needed for the pagination buttons


function addPagination (list) {
  const pageCalc = Math.ceil(list.length / 9); //Output is 5 pages unless more data is added.
  const linkList = document.querySelector('.link-list');

  linkList.innerHTML = '';
  linkList.className = '';

  for (let i = 1; i < list.length; i++) {
    if (i <= pageCalc) {
      const pageNumber =
        `<li>
          <button type="button">${[i]}</button>
        </li>
        `;
      linkList.insertAdjacentHTML("beforeend", pageNumber);
    };//if statement
  };//for Loop

  const pageButton = document.querySelector('button');
  pageButton.className = 'active';

  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      e.stopPropagation();
      showPage(list, e.target.textContent);
    }//if statement
  });//addEventListener


};//function addPagination

showPage(data, 1);
addPagination(data);


/* ============================================ */
/*            nameSearch Function               */
/* ============================================ */
// This function will search for students based on the search input.

//Dynamically inserts the Heading Elements <h2> and search bar
const pageHeader = document.querySelector('.header');

pageHeader.innerHTML = '';

const studentNav = `
  <h2>Students</h2>
  <label for="search" class="student-search">
  <span>Search by name</span>
  <input type="search" oninput="nameSearch()" id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
  `;

pageHeader.insertAdjacentHTML("beforeend", studentNav);
 



// function nameSearch(searchInput, names) {
//   // Filter so only student DATA that includes names that match the search value are output.
//   //create a new student list based on the earch matches. Use the new list as an argument for the showPage function.
//   //Add Pagination - use the new list as an argument for the addPagination function.
//   // Clicking on a pagination button will show the correct page/number of students.
//   const input = document.getElementById('search');
//   const submit = document.querySelector('button');

//   input.innerHTML = '';

//   console.log(searchInput);
//   console.log(names);
//   console.log(input);
//   console.log(submit);

//   for (let i = 1; i < names.length; i++) {
//     if (names[i].name.first.includes(searchInput) || names[i].name.last.includes(searchInput)) {
//       showPage(names, 1);
//     // } else {
//     //   const noMatch =
//     //   `<h3>No Results Found</h3>`;
//     //   studentList.insertAdjacentHTML("beforeend", noMatch);
//     // }
//   }
// }

// /* ============================================ */
// /*            Event Listeners                   */
// /* ============================================ */

//   // Submit button click event listener
//   submit.addEventListener('click', (event) => {
//     event.preventDefault();
//     nameSearch(search, data);
//     console.log('Submit button is functional!');
//   });
  
//   // Submit Keyup Event Listener
//   input.addEventListener('keyup', () => {
//     nameSearch(search, data);
//     console.log('Keyup event on the Search input is functional!');
//   });
// }

// nameSearch(search, data);

