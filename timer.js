class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks){
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    //this.ticking = false;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart){
      this.onStart(this.timeRemaining);
    }
    //
      this.tick();
      console.log("tick");
      this.interval = setInterval(this.tick, 25);
      //this.ticking = true;
    //}

    if (this.timeRemaining <= 0) {
      clearInterval(this.interval);
      //this.ticking = false;
    }
  };

  tick = () => {
    // console.log(this.timeRemaining);
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete){
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.025;
      if(this.onTick){
        this.onTick(this.timeRemaining);
      }
    }
  };
  pause = () => {
    clearInterval(this.interval);
    //this.ticking = false;
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}