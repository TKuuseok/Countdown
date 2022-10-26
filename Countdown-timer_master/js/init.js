// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
	selector: "#clock1",
	targetDate: new Date("November, 20 2022 00:03:00"),
});

timer1.startTimer();
