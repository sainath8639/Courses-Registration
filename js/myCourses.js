// Loading data from Local Storage to the courses table
function loadMyCoursesFromLocalStorage() {
    let courses = JSON.parse(localStorage.getItem("myCourses"));

    console.log("courses are ");
    console.log(courses);

    let courseItemsDiv = document.querySelector("#course-items");

    if (!courseItemsDiv) {
        courseItemsDiv = document.createElement("course-items");
        console.log("no div found");
    }


    // create a child div for each coruse add a div 'course-item' to the this div

    courses.forEach((course) => {
        let courseItemDiv = document.createElement("div");
        courseItemDiv.className = "course-item";

        let p1 = document.createElement("p");
        p1.innerHTML = `Course: ${course.courseName}`;
        let p2 = document.createElement("p");
        p2.innerHTML = `Credits: ${course.credits}`;
        let p3 = document.createElement("p");
        p3.innerHTML = `Professor: ${course.professor}`;
        let p4 = document.createElement("p");
        p4.innerHTML = `Sem: ${course.sem}`;

        courseItemDiv.appendChild(p1);
        courseItemDiv.appendChild(p2);
        courseItemDiv.appendChild(p3);
        courseItemDiv.appendChild(p4);
        courseItemsDiv.appendChild(courseItemDiv);
    });
}

loadMyCoursesFromLocalStorage();
