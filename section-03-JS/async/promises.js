const sonChecksWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
    const randomNumber = Math.floor(Math.random() * 2);
    const result = possibleOutcome[randomNumber];
    console.log(`The weather is ${result}`);

    if (result === "Sunny" || result === "Rainy") {
      resolve(result);
    } else {
      reject(new Error(" I cannot dad"));
    }
  }, 2000);
});

const fatherWillDecide = sonChecksWeather.then((weather) => {
  if (weather === "Sunny") {
    console.log("Go fishing");
  } else {
    console.log("Go To sleep");
  }
});
