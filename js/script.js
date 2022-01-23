/*
Treehouse Techdegree: Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) {
  const firstStudent = (page * 9) - 9;
  const lastStudent = page * 9;
  const studentList = document.querySelector('.student-list');

  studentList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    if (i >= firstStudent && i < lastStudent) {
      const studentItem = ` 
          <li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
              <h3>${data[i].name.first}</h3>
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

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
