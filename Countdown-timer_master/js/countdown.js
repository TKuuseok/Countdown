// class to create a countdown timer
class CountdownTimer {
	// setup timer values
	constructor({ selector, targetDate, backgroundColor = null, foregroundColor = null }) {
		this.selector = selector;
		this.targetDate = targetDate;
		this.backgroundColor = backgroundColor;
		this.foregroundColor = foregroundColor;

        // grab divs on frontend using supplied selector ID
		this.refs = {
			days: document.querySelector(`${this.selector} [id="days"]`),
			hours: document.querySelector(`${this.selector} [id="hours"]`),
			mins: document.querySelector(`${this.selector} [id="minutes"]`),
			secs: document.querySelector(`${this.selector} [id="seconds"]`),
		};
	}

	getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const mins = Math.floor((total / 1000 / 60) % 60);
		const secs = Math.floor((total / 1000) % 60);
		return {
			total,
			days,
			hours,
			mins,
			secs,
		};
	}

	updateTimer({ days, hours, mins, secs }) {
		this.refs.days.textContent = days;
		this.refs.hours.textContent = hours;
		this.refs.mins.textContent = mins;
		this.refs.secs.textContent = secs;
	}

	updateColors() {
		if (this.backgroundColor != null) {
			this.refs.days.style.background = this.backgroundColor;
			this.refs.hours.style.background = this.backgroundColor;
			this.refs.mins.style.background = this.backgroundColor;
			this.refs.secs.style.background = this.backgroundColor;
		}

		if (this.foregroundColor != null) {
			this.refs.days.style.color = this.foregroundColor;
			this.refs.hours.style.color = this.foregroundColor;
			this.refs.mins.style.color = this.foregroundColor;
			this.refs.secs.style.color = this.foregroundColor;
		}
	}

	startTimer() {
		const timer = this.getTimeRemaining(this.targetDate);
		this.updateTimer(timer);
		this.updateColors();
		var x = setInterval(() => {
			const timer = this.getTimeRemaining(this.targetDate);
			this.updateTimer(timer);
			if (timer.secs < 0) {
				clearInterval(x);
				document.getElementById("P??eva").innerHTML = 0;
				document.getElementById("Tundi").innerHTML = 0;
				document.getElementById("Minutit").innerHTML = 0;
				document.getElementById("Sekundit").innerHTML = 0;
				document.getElementById("demo").innerHTML = "V??rskenda veebileht ??llatuseks";
			}
		}, 1000);
	}
}
