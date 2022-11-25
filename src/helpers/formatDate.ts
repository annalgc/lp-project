export function formatDate(date: string | number) {
  if (date <= 0) {
    date = `0${1}`;
  } else if (date < 10) {
    date = `0${date}`;
  }

  return date;
}