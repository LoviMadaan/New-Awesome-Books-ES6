import { DateTime } from './luxon.js';

const dateTime = () => {
  const time = document.querySelector('.dateandtime span');
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  time.innerHTML = date;
  setInterval(dateTime, 1000);
};

export default dateTime;