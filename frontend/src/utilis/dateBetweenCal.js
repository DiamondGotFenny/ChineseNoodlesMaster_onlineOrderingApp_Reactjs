export const CalculateDateBetween = (currentDate, targetDate) => {
  // The number of milliseconds in all UTC days (no DST)
  const oneDay = 1000 * 60 * 60 * 24;

  // A day in UTC always lasts 24 hours (unlike in other time formats)
  const start = Date.UTC(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
    targetDate.getHours(),
    targetDate.getMinutes(),
    targetDate.getSeconds()
  );
  const end = Date.UTC(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds()
  );
  // so it's safe to divide by 24 hours
  return Math.abs((start - end) / oneDay);
};
