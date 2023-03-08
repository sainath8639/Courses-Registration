/* ---------------------------------------------------------------------------All Courses Default Data --------------------------------------------------------------------------- */







/* ---------------------------------------------------------------------------My Courses Default Data--------------------------------------------------------------------------- */

// Storing and loading and deleting objects from local storage
function storeObjectInLocalStorage(object, key) {
  localStorage.setItem(key, JSON.stringify(object));
}

function loadObjectFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function removeObjectFromLocalStorage(key) {
  localStorage.removeItem(key);
}

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
];

storeObjectInLocalStorage(myCourses, "myCourses");
