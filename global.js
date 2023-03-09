// Storing and loading and deleting objects from local storage
export function storeObjectInLocalStorage(object, key) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function loadObjectFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// export function removeObjectFromLocalStorage(key) {
//   localStorage.removeItem(key);
// }

let currSem = "All";
let registerSem = "None";

export function getCurrentSem() {
  // return currSem ;
  return localStorage.getItem("currentSem");
}

export function getRegisterSem() {
  //  return registerSem
  return localStorage.getItem("registerSem");
}
export function setCurrSem(val) {
  localStorage.setItem("currentSem", val);
}

export function setRegisterSem(val) {
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
  console.log("val is : " + selected);
  return selected;
}

export function getSelectedCoursesBySemester(semester) {
  if (semester == "All") return loadObjectFromLocalStorage("myCourses");

  let myCourses = loadObjectFromLocalStorage("myCourses");

  return myCourses.filter((course) => course.sem == semester);
}

export function getRegisterCoursesMatchedResultsForInput(val) {
  console.log("regester sem is :" + getRegisterSem());
  let coursesForSemester = getCoursesBySemester(getRegisterSem());
  console.log("courses for this sem is :  ");
  console.log(coursesForSemester);

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

// storeObjectInLocalStorage(myCourses, "myCourses");
// storeObjectInLocalStorage(allCourses, "allCourses");

export function addCoursesInMyCourses(extraCourses){

  console.log("adding")
  console.log(extraCourses);
  let myCourses = loadObjectFromLocalStorage("myCourses"); 
  extraCourses.forEach(course=>{
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

  console.log("all local storage mycourses are ");
  console.log(myCourses);

  return myCourses.filter((course) => {
    if (course.courseName.toLowerCase().includes(val.toLowerCase()))
      return true;
    if (course.credits.toLowerCase().includes(val)) return true;
    if (course.professor.toLowerCase().includes(val.toLowerCase())) return true;
    if (course.sem.toLowerCase().includes(val.toLowerCase())) return true;
  });
}
