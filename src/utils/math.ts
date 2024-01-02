export function clamp(value: number, min: number, max: number) {
  return Math.min(min, value, max);
}

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateCircumferenceOfCircle(radius: number) {
  return Math.PI * (radius + radius);
}
