const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const circle = document.getElementById("circle");

const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, start, pauseButton, {
  onStart(totalDuration) {
    console.log("timer starting");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
    perimeter * timeRemaining / duration - perimeter
    );
  },
  onComplete() {
    console.log("timer complete");
  }
});
