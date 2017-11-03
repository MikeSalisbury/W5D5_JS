class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let hr;
    let mi;
    let sc;
    if (this.hours < 10) {
      hr = `0${this.hours}`;
    }else {
      hr = `${this.hours}`;
    }
    if (this.minutes < 10) {
      mi = `0${this.minutes}`;
    }else {
      mi = `${this.minutes}`;
    }
    if (this.seconds < 10) {
      sc = `0${this.seconds}`;
    }else {
      sc = `${this.seconds}`;
    }
    console.log(`${hr}:${mi}:${sc}`);
  }

  addHour () {
    if (this.hour < 23) {
      this.hours++;
    }else {
      this.hours = 0;
    }
  }

  addMinute () {
    if (this.minutes < 59) {
      this.minutes++;
    }else {
      this.minutes = 0;
      this.addHour();
    }
  }

  addSecond () {
    if (this.seconds < 59) {
      this.seconds++;
    }else {
      this.seconds = 0;
      this.addMinute();
    }
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.addSecond();
    this.printTime();
  }
}

const clock = new Clock();
setInterval(function () {
  clock._tick();
}, 1000);
