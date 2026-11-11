const BIRTH_YEAR = 1998;
const BIRTH_MONTH = 10; // octubre (1-12)
const BIRTH_DAY = 17;

export const getAge = (fromDate = new Date()) => {
  const currentYear = fromDate.getFullYear();
  const currentMonth = fromDate.getMonth() + 1;
  const currentDay = fromDate.getDate();

  let age = currentYear - BIRTH_YEAR;
  const alreadyHadBirthdayThisYear =
    currentMonth > BIRTH_MONTH ||
    (currentMonth === BIRTH_MONTH && currentDay >= BIRTH_DAY);

  if (!alreadyHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
};
