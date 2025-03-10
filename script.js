const form = document.getElementById('workoutForm');
const list = document.getElementById('workoutList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('workoutName').value;
  const duration = document.getElementById('duration').value;
  const date = document.getElementById('date').value;

  const workout = { name, duration, date };
  saveWorkout(workout);
  displayWorkouts();
  form.reset();
});

function saveWorkout(workout) {
  let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
  workouts.push(workout);
  localStorage.setItem('workouts', JSON.stringify(workouts));
}

function displayWorkouts() {
  list.innerHTML = '';
  const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

  workouts.forEach((w, index) => {
    const li = document.createElement('li');
    li.textContent = `${w.name} - ${w.duration} mins on ${w.date}`;
    list.appendChild(li);
  });
}

displayWorkouts();