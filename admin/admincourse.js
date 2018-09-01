
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZY6BcWa8f-yPghEMdK9ra3M0ceeVHT6A",
  authDomain: "thedaystaracadamy.firebaseapp.com",
  databaseURL: "https://thedaystaracadamy.firebaseio.com",
  projectId: "thedaystaracadamy",
  storageBucket: "thedaystaracadamy.appspot.com",
  messagingSenderId: "611350574586"
};
firebase.initializeApp(config);
var database = firebase.database();

// Create variables
var course_type = '';
var course_title = '';
var course_description = '';
var course_hours = '';
var course_test = '';
var course_lab = '';
var course_tuition = '';
var course_dates = '';

// Click Button changes what is stored in firebase
$("#add-course-btn").on("click", function (event) {
  event.preventDefault(); // Prevent the page from refreshing

  // get input values
  course_type = $("#courseTypeInput").val().trim();
  course_title = $("#courseTitleInput").val().trim();
  course_description = $("#courseDescriptionInput").val().trim();
  course_hours = $("#courseHoursInput").val().trim();
  course_test = $("#courseTestInput").val().trim();
  course_lab = $("#courseLabInput").val().trim();
  course_tuition = $("#courseTuitionInput").val().trim();
  course_dates = $("#courseDatesInput").val().trim();

  //database.ref().push({
  database.ref().set({
    courseType: course_type,
    courseTitle: course_title,
    courseDescription: course_description,
    courseHours: course_hours,
    courseTest: course_test,
    courseLab: course_lab,
    courseTuition: course_tuition,
    courseDates: course_dates
  });

});
// Get added info from dB
database.ref().on('child_added', function (snapshot) {
  var value = snapshot.val();
  // console.log(value);
  console.log(value.courseType);
  console.log(value.courseTitle);
  console.log(value.courseDescription);
  console.log(value.courseHours);
  console.log(value.courseTest);
  console.log(value.courseLab);
  console.log(value.courseTuition);
  console.log(value.courseDates);

  $('#courseCatalog').append(`
    <p><strong>Type: </strong>${value.courseType}</p>
    <p><strong>Title: </strong>${value.courseTitle}</p>
    <p><strong>Description: </strong>${value.courseDescription}</p>
    <p><strong>Hours: </strong>${value.courseHours}</p>
    <p><strong>Test: </strong>${value.courseTest}</p>
    <p><strong>Lab: </strong>${value.courseLab}</p>
    <p><strong>Tuition: </strong>${value.courseTuition}</p>
    <p><strong>Dates: </strong>${value.courseDates}</p>
    <hr>
    ` );
});
