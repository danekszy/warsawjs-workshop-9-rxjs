const getTimer = () => new Promise((resolve, reject) => setTimeout(resolve, 1000));
let currentTime = 0;

function scheduleTimer() {
    const timer = getTimer();
    timer
        .then(() => {
            console.log(currentTime)
            currentTime++;
        })
        .then(scheduleTimer);
}

scheduleTimer();
