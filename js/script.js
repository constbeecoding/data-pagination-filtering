/*
The `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) {
  const firstStudent = (page * 9) - 9;
  const lastStudent = page * 9;
  const studentList = document.querySelector('.student-list');

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


/*
The `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
  const pageCalc = Math.ceil(list.length / 9); //Output is 5 pages unless more data is added.
  const linkList = document.querySelector('.link-list');

  linkList.innerHTML = '';

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
    if (e.tagName = 'button') {
      const pageButton  = document.querySelector('.active');
      pageButton.className = '';

      e.target.className = 'active';

      showPage(list, e.target.textContent);
  
    }//if statement
  });//addEventListener
};//function addPagination

showPage(data, 1);
addPagination(data);