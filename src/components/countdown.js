export function countdown(time) {
  var countDownDate = new Date(time).getTime();
  var now = new Date().getTime();

  var distance = countDownDate - now;

  if (distance < 0) {
    return null;
  }

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

export function transcribeCount(array) {
  const result =
    array[0].toString() +
    "天" +
    array[1].toString() +
    "時" +
    array[2].toString() +
    "分" +
    array[3].toString() +
    "秒";
  return result;
}
