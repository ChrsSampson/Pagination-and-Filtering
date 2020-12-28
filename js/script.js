/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(){
   // selectors
   // I think I am Supuse to use class slectors here but theres nothing that says I cant add ids to things. 
   const studentList = document.getElementById("student-List");
   const header = document.getElementById("header");

   // create search box
   const searchBox = document.createElement('label');
   searchBox.classList.add("student-search");
   searchBox.innerHTML = `
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   `;
   // Attatch search box
   header.appendChild(searchBox);

   //Create Student Cards 
   data.forEach((student) => {
      let card = document.createElement('li');

      card.classList.add('student-item');
      card.classList.add('cf')
      let currStudent = student;
      card.innerHTML = `
      <div class="student-details">
            <img class="avatar" src=${currStudent.picture.large}>
            <h3 id="studentName">${currStudent.name.title} ${currStudent.name.first} ${currStudent.name.last}</h3>
            <span class="email">${currStudent.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${currStudent.registered.date}</span>
          </div>
        </li>
      `;
      studentList.appendChild(card);
   });
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(){
   const pageBtnContainer = document.getElementsByClassName("link-list"); 
   let pages = Math.ceil(data.length / 9)
   pageBtnContainer.innerHTML = ``;
   for(let i = 1; i <= pages; i++ ){
      let button = document.createElement('li');
      button.innerHTML = `<button type="button" class="active">${i}</button>`;
      pageBtnContainer.insertAdjacentHTMl(button);
   }

}


// Call functions
// Without these we are nothing
showPage();
addPagination();



// Search Function (This Shit Dont work)
const searchBox = document.getElementById('search');
const students = document.getElementsByClassName('student-item')
searchBox.addEventListener('keyup', (e) =>{
   console.log(e.target.value)
   const searchTerm = e.target.value.toLowerCase();
   for(let i = 0; i < students.length; i++){
       const name = students[i].getAttribute('studentName');
       if(name.toLowerCase().includes(searchTerm)) {
           students[i].style.display = 'block';
       }
       else{
           students[i].style.display = 'none';
       }
   }
});