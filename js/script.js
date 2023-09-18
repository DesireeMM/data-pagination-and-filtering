/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Set the max number of students to display on each page
const studentsPerPage = 9;

// Dynamically add search bar
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
const header = document.querySelector('.header');
const searchHTML = `
   <label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;
header.insertAdjacentHTML('beforeend', searchHTML)

// Listen for keyboard input and dynamically display search results
const searchInput = document.querySelector('#search');
searchInput.addEventListener('keyup', () => {
   const filteredStudents = [];
   const searchString = searchInput.value.toLowerCase();

   for (let i = 0; i < data.length; i++) {
      const currentStudentName = data[i].name.first + data[i].name.last;
      if (currentStudentName.toLowerCase().includes(searchString)) {
         filteredStudents.push(data[i]);
      }
   }

   if (filteredStudents.length > 0) {
      addPagination(filteredStudents);
      showPage(filteredStudents, 1);
   } else {
      studentList.innerHTML = '<h3>No search results found.</h3>';
      linkList.innerHTML = '';
   }
});

/***
 * Creates and inserts the elements needed to display a page of 9 students
 * 
 * @param {array} list - an array of student data
 * @param {number} page - page to display
 */
function showPage(list, page) {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage);

   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const html = `
            <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
         `
         studentList.insertAdjacentHTML('beforeend', html);
      }
   }
}

/***
 * Create and insert the elements needed for pagination buttons
 * 
 * @param {array} list - an array of student data
 */
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / studentsPerPage);

   linkList.innerHTML = '';

   for (i = 1; i <= numOfPages; i++) {
      const html = `
         <li>
            <button type="button">${i}</button>
          </li>
      `
      linkList.insertAdjacentHTML('beforeend', html);
   }

   linkList.querySelector('button').classList.add('active');

   linkList.addEventListener('click',(evt) => {
      const btnActive = linkList.querySelector('.active');
      const btnClicked = evt.target.closest('button');

      if (btnActive && btnClicked) {
         btnActive.classList.remove('active');
      }

      if (btnClicked) {
         btnClicked.classList.add('active');
         showPage(list, btnClicked.textContent);
      }
   });
}


// Call functions
addPagination(data);
showPage(data, 1);