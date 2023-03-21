import {
  getSelectedCoursesBySemester,
  getMyCoursesMatchedResultsForInput,
  setCurrSem,
  getCurrentSem,
  fetchCourseNames
} from "../global.js";



// Loading data from Local Storage to the courses table
async function loadMyCoursesFromLocalStorage() {
  let courses = getSelectedCoursesBySemester(getCurrentSem());
  console.log("called")

  
  //Loading from Rapid Api 
  await fetchCourseNames(courses);

  let coursesDiv = document.querySelector("#course-items");
  coursesDiv.innerHTML = "";
  courses.forEach((course) => {
    let courseDiv = document.createElement("div");
    courseDiv.classList.add("course-item");

    courseDiv.innerHTML = `
    <p>Course: ${course.courseName}</p>
    <p>Credits: ${course.credits}</p>
    <p>Professor: ${course.professor}</p>
    <p>Sem: ${course.sem}</p>`;

    coursesDiv.appendChild(courseDiv);
  });
}

/*

<div class="course-item item-0">
    <p>Course: Image Processing</p>
    <p>Credits: 4</p>
    <p>Professor: Trilok Panth</p>
    <p>Sem: 1</p>
</div> 
*/

loadMyCoursesFromLocalStorage();

let semSelectForm = document.querySelector(".sem-selector-form");

semSelectForm.addEventListener("change", function (event) {
  event.preventDefault();
  let val = semSelectForm.elements["semester"].value;

  setCurrSem(val);

  let semCourses = getSelectedCoursesBySemester(val);
  // console.log("Res is  ");
  // console.log(semCourses);

  let coursesDiv = document.querySelector("#course-items");
  coursesDiv.innerHTML = "";
  semCourses.forEach((course) => {
    let courseDiv = document.createElement("div");
    courseDiv.classList.add("course-item");
    courseDiv.innerHTML = `
    <p>Course: ${course.courseName}</p>
    <p>Credits: ${course.credits}</p>
    <p>Professor: ${course.professor}</p>
    <p>Sem: ${course.sem}</p>`;

    coursesDiv.appendChild(courseDiv);
  });
});

let searchFilterInput = document.querySelector("#searchbar-filter-input");

searchFilterInput.addEventListener("input", function (event) {
  event.preventDefault();

  let val = event.target.value;

  // also I have to filter my current selected sem 
  let inputSelectedCourses = getMyCoursesMatchedResultsForInput(val);

  // console.log("Res is :  ");
  // console.log(inputSelectedCourses);

  let coursesDiv = document.querySelector("#course-items");
  coursesDiv.innerHTML = "";
  inputSelectedCourses.forEach((course) => {
    let courseDiv = document.createElement("div");
    courseDiv.classList.add("course-item");
    courseDiv.innerHTML = `
    <p>Course: ${course.courseName}</p>
    <p>Credits: ${course.credits}</p>
    <p>Professor: ${course.professor}</p>
    <p>Sem: ${course.sem}</p>`;

    coursesDiv.appendChild(courseDiv);
  });
});
