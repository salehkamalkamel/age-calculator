const form = document.querySelector("form");
const submit = document.querySelector("#submit-btn");

const dayMsg = document.querySelector(".day-msg");
const monthMsg = document.querySelector(".month-msg");
const yearMsg = document.querySelector(".year-msg");

let data = [];

form.day.value
  ? form.day.addEventListener("blur", () => {
      if (+day.value > 31) {
        dayMsg.textContent = "Must be a valid day";
        dayMsg.parentElement.classList.add("error-stat");
      } else {
        dayMsg.textContent = "";
        dayMsg.parentElement.classList.remove("error-stat");
        data.push({ day: day.value });
        console.log(data);
      }
    })
  : "";

form.month.addEventListener("blur", () => {
  if (+month.value > 12) {
    monthMsg.textContent = "Must be a valid month";
    monthMsg.parentElement.classList.add("error-stat");
  } else {
    monthMsg.textContent = "";
    monthMsg.parentElement.classList.remove("error-stat");
    data.push({ month: month.value });
    console.log(data);
  }
});

form.year.addEventListener("blur", (e) => {
  let d = new Date();
  if (+year.value > d.getFullYear()) {
    yearMsg.textContent = "Must be in past";
    yearMsg.parentElement.classList.add("error-stat");
  } else {
    yearMsg.textContent = "";
    yearMsg.parentElement.classList.remove("error-stat");
    data.push({ year: year.value });
    console.log(data);
    action();
  }
});

function action() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

// form.addEventListener("submit", (e) => {
//   const birthDate = dataBase(
//     +form.day.value,
//     +form.month.value,
//     +form.year.value
//   );
//   if (+birthDate.day > 31) {
//     dayMsg.textContent = "Must be a valid day";
//     dayMsg.parentElement.classList.add("error-stat");
//   }
//   if (+birthDate.month > 12) {
//     monthMsg.textContent = "Must be a valid month";
//     monthMsg.parentElement.classList.add("error-stat");
//   }
//   if (+birthDate.year > 2023) {
//     yearMsg.textContent = "Must be in the present";
//     yearMsg.parentElement.classList.add("error-stat");
//   }
//   // e.preventDefault();
// });

// const dataBase = function (day, month, year) {
//   return {
//     day,
//     month,
//     year,
//   };
// };

// form.day.addEventListener("blur", () => {
//   console.log("done");
// });
