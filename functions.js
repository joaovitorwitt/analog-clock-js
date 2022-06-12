
const secondsValue = document.querySelector('[data-second]')
const minutesValue = document.querySelector('[data-minute]')
const HoursValue = document.querySelector('[data-hour]')

const timing = () => {
    const currentDate = new Date();
    const setSeconds = currentDate.getSeconds() / 60;
    // to gradually increase the minutes and hours value
    const setMinutes = (setSeconds + currentDate.getMinutes()) / 60;
    const setHours = (setMinutes + currentDate.getHours()) / 12;

    setRotation(secondsValue, setSeconds);
    setRotation(minutesValue, setMinutes);
    setRotation(HoursValue, setHours);
}

const setRotation = (el, rotationRatio) => {
    el.style.setProperty('--rotation', rotationRatio * 360)
}

timing()
setInterval(timing, 1000)
