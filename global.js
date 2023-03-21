// Storing and loading and deleting objects from local storage
export function storeObjectInLocalStorage(object, key) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function loadObjectFromLocalStorage(key) {

  // if key is myCourses then load from api 
  // if (key == 'myCourses') {
  //   let ret = [];
  //   await fetchCourseNames(ret).then(()=>{
  //     console.log('ret is ');
  //     console.log(ret);
  //     return ret;
  //   });
  //   // stop for 2 sec and return 
  // }
  return JSON.parse(localStorage.getItem(key));
}

// export function removeObjectFromLocalStorage(key) {
//   localStorage.removeItem(key);
// }

let currSem = "All";
let registerSem = "None";

export function getCurrentSem() {
  return currSem;
  // return localStorage.getItem("currentSem");
}

export function getRegisterSem() {
  return registerSem
  // return localStorage.getItem("registerSem");
}
export function setCurrSem(val) {
  currSem = val;
  localStorage.setItem("currentSem", val);
}

export function setRegisterSem(val) {
  registerSem = val;
  localStorage.setItem("registerSem", val);
}

/* ---------------------------------------------------------------------------All Courses Default Data --------------------------------------------------------------------------- */
// each course should have  -> courseName, professoor , sem , Eligibility , limit, credits
let allCourses = [
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Computer Networking",
    credits: "4",
    professor: "Anand Gupta",
    sem: "2",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Computer Networking",
    credits: "4",
    professor: "Anand Gupta",
    sem: "2",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Computer Networking",
    credits: "4",
    professor: "Anand Gupta",
    sem: "2",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "Computer Networking",
    credits: "4",
    professor: "Anand Gupta",
    sem: "2",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "System Design",
    credits: "4",
    professor: "Rahul Kala",
    sem: "3",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "System Design",
    credits: "4",
    professor: "Rahul Kala",
    sem: "3",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "System Design",
    credits: "4",
    professor: "Rahul Kala",
    sem: "3",
    eligibility: "CSE",
    limit: "50",
  },
  {
    courseName: "System Design",
    credits: "4",
    professor: "Rahul Kala",
    sem: "3",
    eligibility: "CSE",
    limit: "50",
  },
];

// utility functions
export function getCoursesBySemester(semester) {
  let allCourses = loadObjectFromLocalStorage("allCourses");
  return allCourses.filter((course) => course.sem === semester);
}

export function isSemAlreadyEnrolled(semester) {
  let selected = false;
  let myCourses = loadObjectFromLocalStorage("myCourses");
  myCourses.forEach((course) => {
    if (course.sem == semester) {
      selected = true;
    }
  });
  // console.log("val is : " + selected);
  return selected;
}

export function getSelectedCoursesBySemester(semester) {
  if (semester == "All") return loadObjectFromLocalStorage("myCourses");

  let myCourses = loadObjectFromLocalStorage("myCourses");

  return myCourses.filter((course) => course.sem == semester);
}

export function getRegisterCoursesMatchedResultsForInput(val) {
  // console.log("regester sem is :" + getRegisterSem());
  let coursesForSemester = getCoursesBySemester(getRegisterSem());
  // console.log("courses for this sem is :  ");
  // console.log(coursesForSemester);

  // if this sem is already registered then return null
  if (isSemAlreadyEnrolled(getRegisterSem())) {
    alert(
      "You had already Professor in this semester, Please Select a new semester"
    );
    return;
  }

  return coursesForSemester.filter((course) => {
    if (course.courseName.toLowerCase().includes(val.toLowerCase()))
      return true;
    if (course.credits.toLowerCase().includes(val)) return true;
    if (course.professor.toLowerCase().includes(val.toLowerCase())) return true;
    if (course.eligibility.toLowerCase().includes(val.toLowerCase()))
      return true;
    if (course.limit.toLowerCase().includes(val.toLowerCase())) return true;
    if (course.sem.toLowerCase().includes(val.toLowerCase())) return true;
  });
}

/* ---------------------------------------------------------------------------My Courses Default Data--------------------------------------------------------------------------- */

// storing MyCourses in local storage
let myCourses = [
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Image Processing",
    credits: "4",
    professor: "Trilok Panth",
    sem: "1",
  },
  {
    courseName: "Computer Networking",
    credits: "4",
    professor: "Anand Gupta",
    sem: "6",
  },
];

function setStaticDataToLocalStorage(){
  console.log("set")
  storeObjectInLocalStorage(myCourses, "myCourses");
}
// setStaticDataToLocalStorage();


// storeObjectInLocalStorage(myCourses, "myCourses");
// storeObjectInLocalStorage(allCourses, "allCourses");

export function addCoursesInMyCourses(extraCourses) {

  // console.log("adding")
  // console.log(extraCourses);
  let myCourses = loadObjectFromLocalStorage("myCourses");
  extraCourses.forEach(course => {
    myCourses.push(course);
  });
  storeObjectInLocalStorage(myCourses, "myCourses");
}


/* ---------------------------------------------------------------------------Admin -------------------------------------------------------------------------- */

export function getMatchedResultsForInput(val) {
  let allCourses = loadObjectFromLocalStorage("allCourses");

  // console.info(allCourses.length);
  return allCourses.filter((course) => {
    if (course.courseName.toLowerCase().includes(val.toLowerCase()))
      return true;
    if (course.credits.toLowerCase().includes(val)) return true;
    if (course.professor.toLowerCase().includes(val.toLowerCase())) return true;
    if (course.eligibility.toLowerCase().includes(val.toLowerCase()))
      return true;
    if (course.limit.toLowerCase().includes(val.toLowerCase())) return true;
    if (course.sem.toLowerCase().includes(val.toLowerCase())) return true;
  });
}

export function getMyCoursesMatchedResultsForInput(val) {
  // also I have to filter my current selected sem
  let myCourses = getSelectedCoursesBySemester(getCurrentSem());

  // console.log("all local storage mycourses are ");
  // console.log(myCourses);

  return myCourses.filter((course) => {
    if (course.courseName.toLowerCase().includes(val.toLowerCase()))
      return true;
    // if (course.credits.toLowerCase().includes(val)) return true;
    if (course.credits === val) return true;
    if (course.professor.toLowerCase().includes(val.toLowerCase())) return true;
    // if (course.sem.toLowerCase().includes(val.toLowerCase())) return true;
    if (course.sem === val) return true;
  });
}



/*------------------------------------------------------------------------------ Rapid Api Start -------------------------------------------------------------------------*/
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8f499c97d2msh9eb4d1659e367b6p1da607jsn3f6d571d91ac',
    'X-RapidAPI-Host': 'udemy-course-scrapper-api.p.rapidapi.com'
  }
};


let coruseNames = [];

let instructorNames = [];

export async function fetchCourseNames(courses) {
  await fetch('https://udemy-course-scrapper-api.p.rapidapi.com/course-names', options)
    .then(response => response.json())
    .then(response => {
      coruseNames = Object.values(response);
      // now fetch the Instructors
      // console.log("calling Instructors");
      fetchInstructorNames(courses);
    })
    .catch(err => console.error(err));

    console.log("Fasdfa");
}

async function fetchInstructorNames(courses) {
  await fetch('https://udemy-course-scrapper-api.p.rapidapi.com/course-names/course-instructor', options)
    .then(response => response.json())
    .then(response => {
      instructorNames = Object.values(response);
      // now display them
      // console.log("calling display");
      // displayCourseAndInstructorNames();
      loadCoursesFromApiAndReplaceLocalStorageValues();
    })
    .catch(err => console.error(err));
}

function displayCourseAndInstructorNames() {
  for (let i = 0; i < Math.min(coruseNames.length, instructorNames.length); i++) {
    console.log(`Course ${coruseNames[i].course_name} is going to be taught by ${instructorNames[i].instructor} `)
  }
}

function loadCoursesFromApiAndReplaceLocalStorageValues(courses) {
  courses = [];
  // console.log("laded")
  for (let i = 0; i < Math.min(coruseNames.length, instructorNames.length); i++) {

    let obj = {};   // name , prof , sem ,  credits 4
    obj.courseName = coruseNames[i].course_name
    obj.credits = 4;
    obj.professor = instructorNames[i].instructor;
    obj.sem = Math.round(Math.random() * 7) + 1;
    // console.log(obj);
    courses.push(obj);
  }

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

  storeObjectInLocalStorage(courses, "myCourses")
}
/*------------------------------------------------------------------------------ Rapid Api End -------------------------------------------------------------------------*/
