/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Attach SearchBox to Page
// create search box
function createSearchBox(){
   const header = document.querySelector(".header");
   const searchBox =`
      <label for="search" class="student-search"> 
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>   
      `;
   // Attatch search box
   header.insertAdjacentHTML("beforeend", searchBox);
}


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(StudentArray, page){
   // selectors
   const listContainer = document.querySelector(".student-list");
   

   // Variables
   let start = (page * 9) - 9;
   let end = page * 9;
   
   // Clear Container
   listContainer.innerHTML = ``;

   //Create Student Cards 
   StudentArray.forEach((student, index) => {
      if(index >= start && index < end){     

         let card = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${student.picture.large}>
               <h3 id="studentName">${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>
         `;
         listContainer.insertAdjacentHTML("beforeend", card);
      }
   });
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const btnContainer = document.querySelector(".link-list");

function addPagination(list){
   
   let pages = Math.ceil(list.length / 9)
   btnContainer.innerHTML = ``;
   for(let i = 1; i <= pages; i++ ){
      let button=`
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      btnContainer.insertAdjacentHTML("beforeend", button);
   }
   btnContainer.querySelector('BUTTON').classList.add("active");
}

// Event Listener for Page picker
btnContainer.addEventListener('click', (e) => {
   if(e.target.tagName == 'BUTTON'){
      document.querySelector(".active").className = "";
      e.target.classList.add('active');
      let pageNumber = e.target.textContent;
      showPage(data, pageNumber);
   }
});


// Call functions
// Without these we are nothing
showPage(data, 1);
addPagination(data);
createSearchBox();


// Search Function 
const searchBox = document.getElementById('search');
searchBox.addEventListener("keyup", (e) => {
   // Clear Container
   const listContainer = document.querySelector(".student-list");

   listContainer.innerHTML = "";
   // Load all Students into list
   data.forEach((student) => {
      
         let card = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${student.picture.large}>
               <h3 id="studentName">${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>
         `;
         listContainer.insertAdjacentHTML("beforeend", card);
      
   });

   // Read the list and input
   let studentItems = document.querySelectorAll(".student-item");
   let students = Array.from(studentItems);
   let searchTerm = searchBox.value.toLowerCase();
   console.log(searchTerm, students);

   // Show matching Items
   students.forEach((student)=>{
      if(student.innerHTML.includes(searchBox.value.toLowerCase())){
         student.style.display = "flex"
      }
      else{
         student.style.display = "none";
      }

   });

   // reset page on search exit
   if(searchTerm == ""){
      showPage(data, 1);
   }

});


