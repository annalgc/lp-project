export function randomInteger(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

export function randomDate() {
  const start = new Date(2020, 0, 1);
  const today = new Date();

  return new Date(start.getTime() + Math.random() * (today.getTime() - start.getTime()))
}