var $ = jQuery;

$(document).ready(function() {

	var exerciseSelect = $("#exercise");

	$(document).on("change", "#body-part", getExerciseList);

	function getExerciseList() {
		var bodyPart = $("#body-part").val();
		if(bodyPart !== "") {
			getExercises(bodyPart);
		};
	};

	// A function to get exercises and then render our list of exercises
	function getExercises(bodyPart) {
		$.get("/api/exercise-list/" + bodyPart, renderExerciseList);
	};

	// Function to render a list of exercises
    function renderExerciseList(data) {
    	var rowsToAdd = [];
    	for (var i = 0; i < data.length; i++) {
     		rowsToAdd.push(createExerciseOption(data[i]));
    	};
    	exerciseSelect.empty();
    	exerciseSelect.append(rowsToAdd);
<<<<<<< Updated upstream
=======
    	
>>>>>>> Stashed changes
  	};

	// Creates the options in the dropdown
  	function createExerciseOption(exercise) {
    	var exerciseOption = $("<option>");
    	exerciseOption.attr("value", exercise.title);
    	exerciseOption.text(exercise.title);
    	return exerciseOption;
  	};

});