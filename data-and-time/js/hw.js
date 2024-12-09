//згадати ооп
class CountdownTimer {
  constructor(time) {
    this.time = time;
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});

let timerElent2 = document.querySelector(".timer");
const time = new Date("17:10:00:00");
const targetDate = new Date();
const difference = targetDate - time;
const countTimer = setInterval(() => {
  let countTimer;
  // Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
  // мілісекунд в один день (мілісекунди * секунди * хвилини * години)

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
   * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
   * залишку% і ділимо його на кількість мілісекунд в одній годині
   * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  /*
   * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
   * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  /*
   * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  if (time < 0) {
    clearInterval(countTimer);
    timerElent2.textContent = "Time is up";
  }
}, 1000);

console.log(` ${days}days, ${hours}hours, ${mins}mins,${secs}secs`);
//countimer викликати
//робити все у функції
