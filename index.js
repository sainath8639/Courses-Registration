// Check if the selected sem is already enrolled, If yes make the data to null  else show the courses available in the selected sem


function checkSelectedSem(selectedSem) {
    if(selectedSem == 'None'){
        // make the data null
        console.log('Already Enrolled');
        return;
    }
    if (selectedSem == null) {
        // selectedSem = $("#selectedSem option:selected").val();
    }
    if (selectedSem!= null) {
       
    }
}

checkSelectedSem('None');