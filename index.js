import { getCoursesBySemester, isSemAlreadyEnrolled, getRegisterCoursesMatchedResultsForInput, setRegisterSem, getRegisterSem, addCoursesInMyCourses } from "./global.js";
// Check if the selected sem is already enrolled, If yes make the data to null  else show the courses available in the selected sem

function checkSelectedSemAtRefresh() {

    let selectedSem = getRegisterSem();
    // console.log(selectedSem);
    if (selectedSem == "None") {
        // make the data null
        // console.log("Already Enrolled");
        return;
    }
    // try to retain the register sem when refresh
    // create element named event 
    // let event = {};
    // event.target = {};
    // event.target.value = getCoursesBySemester(getRegisterSem());
    // event.preventDefault = function () {
    //     console.log("called dummy prevent default")
    // }
    // createHtmlElement(event);
}

checkSelectedSemAtRefresh();

let semSelectForm = document.querySelector(".sem-selector-form");

semSelectForm.addEventListener("change", function (event) {
    event.preventDefault();
    let val = semSelectForm.elements["semester"].value;
    setRegisterSem(val);
    let coursesTableBody = document.querySelector("#courses-table-body");
    coursesTableBody.innerHTML = "";
    //   console.log('val is :  ' + val)

    if (isSemAlreadyEnrolled(val) == true) {
        // console.log("fasfd")
        alert(
            "You had already enrolled in this semester, Please Select a new semester"
        );
        return;
    }

    let semCourses = getCoursesBySemester(val);
    // add each course to the body
    // console.log(semCourses);

    semCourses.forEach((course) => {
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

        let courseSelect = document.createElement("select");
        courseSelect.classList.add("select");
        let opt1 = document.createElement("option");
        opt1.value = "yes";
        opt1.selected = false;
        opt1.classList.add("opt1");
        opt1.innerHTML = "YES"
        courseSelect.appendChild(opt1);

        let opt2 = document.createElement("option");
        opt2.value = "no";
        opt2.selected = true;
        opt2.classList.add("opt2");
        opt2.innerHTML = "NO"
        courseSelect.appendChild(opt2);
        courseTableRowdata6.appendChild(courseSelect);

        courseTableRow.appendChild(courseTableRowdata1);
        courseTableRow.appendChild(courseTableRowdata2);
        courseTableRow.appendChild(courseTableRowdata3);
        courseTableRow.appendChild(courseTableRowdata4);
        courseTableRow.appendChild(courseTableRowdata5);
        courseTableRow.appendChild(courseTableRowdata6);

        coursesTableBody.appendChild(courseTableRow);
    });

    
});


// let selectSemester  = document.querySelector(".select-semester");

// selectSemester.addEventListener("change", function(event) {
//     console.log("changed")
// })


let searchFilterInput = document.querySelector("#searchbar-filter-input");

searchFilterInput.addEventListener("input", e => createHtmlElement(e));


function createHtmlElement(event) {
    event.preventDefault();
    let val = event.target.value;
    let inputSelectedCourses = getRegisterCoursesMatchedResultsForInput(val);
    // console.log("Res is :  ");
    // console.log(inputSelectedCourses);


    // set Items to table 
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
        // courseTableRowdata6.innerHTML = course.sem;
        // create an select object with options as yes or no


        courseTableRow.appendChild(courseTableRowdata1);
        courseTableRow.appendChild(courseTableRowdata2);
        courseTableRow.appendChild(courseTableRowdata3);
        courseTableRow.appendChild(courseTableRowdata4);
        courseTableRow.appendChild(courseTableRowdata5);
        courseTableRow.appendChild(courseTableRowdata6);

        coursesTableBody.appendChild(courseTableRow);
    });

}



//  adding courses submited to myCourses

let submitFormCourses = document.querySelector("#submit-form-courses");

submitFormCourses.addEventListener("submit", function (event) {

    // event.preventDefault();
    //  register them in myCourses 
    let extraCourses = [];

    let res = document.forms['submit-form-courses']
    let tbody = res.querySelector("tbody")
    let tr1 = tbody.querySelectorAll('tr')[0]
    let select = tr1.querySelector('select')
    let opt = select.querySelector('option')

    let trs = tbody.querySelectorAll('tr');

    trs.forEach(tr=>{

        if(tr.querySelector('select').value == 'yes'){
            let tds = tr.querySelectorAll('td');

            // CourseName	Credits	Professor	Limit	Eligibility	Enroll (Yes/No)
            let course = {};
            course.courseName = tds[0].innerHTML;
            course.credits = tds[1].innerHTML;
            course.professor = tds[2].innerHTML;
            course.limit = tds[3].innerHTML;
            course.eligibility = tds[4].innerHTML;
            course.sem= getRegisterSem();
            extraCourses.push(course);
        }
    });
    addCoursesInMyCourses(extraCourses);
    alert("Course Registration Successfull!");
});