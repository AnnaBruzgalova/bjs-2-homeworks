class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(id, time, callback) {
        if (!id) {
            throw new Error('error text');
        }

        let validId = this.alarmCollection.some((item) => id == this.alarmCollection[0].id);
        if (validId) {
            console.error('Звонок с данным id уже существует');
            return;
        }
        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });
        return currentDate;
    }
    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock);
            }, 1000);
        }
        return;
    }
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }
    printAlarms() {
        return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
    }
    clearAlarms() {
        this.stop();
        return this.alarmCollection = [];
    }
}

//Example:

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => {
        console.log('Давай,вставай уже!');
        phoneAlarm.removeClock(2)
    },
    2);
phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));
phoneAlarm.addClock('09:02', () => {
    console.log('Вставай,а то проспишь');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);
phoneAlarm.addClock('09:05', () =>
    console.log('Вставай,а то проспишь'), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();