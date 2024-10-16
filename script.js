const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");

const newYear = new Date("Jan 1, 2025 00:00:00").getTime();


const updateCountdown = () => {
  const currentDate = new Date().getTime();
    console.log(currentDate)
  const diff = newYear - currentDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = Math.floor(diff / days);
  const h = Math.floor((diff % days) / hours);
  const m = Math.floor((diff % hours) / minutes);
  const s = Math.floor((diff % minutes) / seconds);

  dayEl.innerHTML = d;
  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondsEl.innerHTML = s;

  setTimeout(updateCountdown, 1000);
};

updateCountdown();