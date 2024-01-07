/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Work {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

enum Rest {
  Saturday,
  Sunday,
}

function isWeekend(day: Work | Rest): string {
  if (day >= Work.Monday && day <= Work.Friday) {
    return "Run the week with enthusiasm, embrace challenges and celebrate your accomplishments.";
  } else if (day === Rest.Saturday || day === Rest.Sunday) {
    return "Recharge your batteries, embrace relaxation, and prepare for another successful week.";
  }
  return "What do you call a lazy kangaroo? A pouch potato. Now, get off your couch and start working!";
}
