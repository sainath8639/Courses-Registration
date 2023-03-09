import {
  storeObjectInLocalStorage,
  loadObjectFromLocalStorage,
  getMatchedResultsForInput,
} from "../global.js";

function loadAllCoursesFromLocalStorage() {
  let key = "allCourses";
  let allCourses = loadObjectFromLocalStorage(key);
  let coursesTableBody = document.querySelector("#courses-table-body");
  coursesTableBody.innerHTML = "";

  allCourses.forEach((course) => {
    let courseTableRow = document.createElement("tr");
    let courseTableRowdata1 = document.createElement("td");
    courseTableRowdata1.innerHTML = course.courseName;
    let courseTableRowdata2 = document.createElement("td");
    courseTableRowdata2.innerHTML = course.credits;
    let courseTableRowdata3 = document.createElement("td");
    courseTableRowdata3.innerHTML = course.professor;
    let courseTableRowdata4 = document.createElement("td");
    courseTableRowdata4.innerHTML = course.limit;
    let courseTableRowdata5 = document.createElement("td");
    courseTableRowdata5.innerHTML = course.eligibility;

    let courseTableRowdata6 = document.createElement("td");
    courseTableRowdata6.innerHTML = course.sem;

    courseTableRow.appendChild(courseTableRowdata1);
    courseTableRow.appendChild(courseTableRowdata2);
    courseTableRow.appendChild(courseTableRowdata3);
    courseTableRow.appendChild(courseTableRowdata4);
    courseTableRow.appendChild(courseTableRowdata5);
    courseTableRow.appendChild(courseTableRowdata6);

    coursesTableBody.appendChild(courseTableRow);
  });
}

loadAllCoursesFromLocalStorage();

let form = document.querySelector("#courses-form");

form.addEventListener("submit", function (event) {
  // extract form input fields from the event object
  console.log(event.target.courseName.value);

  let courseName = event.target.courseName.value;

  let credits = event.target.credits.value;
  let professor = event.target.professor.value;
  let limit = event.target.limit.value;
  let eligibility = event.target.eligibility.value;
  let sem = event.target.sem.value;

  let course = {
    courseName: courseName,
    credits: credits,
    professor: professor,
    limit: limit,
    eligibility: eligibility,
    sem: sem,
  };

  // add it to global object
  // key is allCourses
  let key = "allCourses";
  let allCourses = loadObjectFromLocalStorage(key);

  allCourses.push(course);
  console.log("here are updated courses");
  console.log(allCourses);
  storeObjectInLocalStorage(allCourses, key);
  loadAllCoursesFromLocalStorage();
});

let searchFilterInput = document.querySelector("#searchbar-filter-input");

searchFilterInput.addEventListener("input", function (event) {
  event.preventDefault();

  let val = event.target.value;

  let inputSelectedCourses = getMatchedResultsForInput(val);

  console.log("res courses are");
  console.log(inputSelectedCourses);

  let coursesTableBody = document.querySelector("#courses-table-body");
  coursesTableBody.innerHTML = "";

  inputSelectedCourses.forEach((course) => {
    let courseTableRow = document.createElement("tr");
    let courseTableRowdata1 = document.createElement("td");
    courseTableRowdata1.innerHTML = course.courseName;
    let courseTableRowdata2 = document.createElement("td");
    courseTableRowdata2.innerHTML = course.credits;
    let courseTableRowdata3 = document.createElement("td");
    courseTableRowdata3.innerHTML = course.professor;
    let courseTableRowdata4 = document.createElement("td");
    courseTableRowdata4.innerHTML = course.limit;
    let courseTableRowdata5 = document.createElement("td");
    courseTableRowdata5.innerHTML = course.eligibility;
    let courseTableRowdata6 = document.createElement("td");
    courseTableRowdata6.innerHTML = course.sem;

    courseTableRow.appendChild(courseTableRowdata1);
    courseTableRow.appendChild(courseTableRowdata2);
    courseTableRow.appendChild(courseTableRowdata3);
    courseTableRow.appendChild(courseTableRowdata4);
    courseTableRow.appendChild(courseTableRowdata5);
    courseTableRow.appendChild(courseTableRowdata6);

    coursesTableBody.appendChild(courseTableRow);
  });
});
