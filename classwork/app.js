angular.module("getSwole",[])
  .controller ("workoutListController", function($scope){
  $scope.title = "My Title";

  $scope.exerciseGroups = ["Chest", "Back"];
  $scope.workouts=[];

  $scope.addWorkout = function (){
    console.log("form was submitted");
    $scope.workouts.push($scope.exercise);
    // $scope.workouts.push({
    //   muscleGroup: exercise.muscleGroup,
    //   exercise : exercise.exercise,
    //   date :exercise.date,
    //   weight :exercise.weight,
    //   reps:exercise.reps
    // });
  $scope.exercise = {};
  }
});
