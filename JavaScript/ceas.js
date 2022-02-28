function currentTime() {
  let date = new Date();

  let hours = date.getHours();

  let minutes = date.getMinutes();

  let seconds = date.getSeconds();

  hours = updateTime(hours);

  minutes = updateTime(minutes);

  seconds = updateTime(seconds);

  document.querySelector("#clock").innerText =
    "The time is : " + hours + ":" + minutes + ":" + seconds;

  let t = setTimeout(currentTime, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();
