const countdown = () => {
	const countDate = new Date("October 1, 2024 00:00:00").getTime();
	const now = new Date().getTime();  
	const gap = countDate - now;

	//how time works
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	//
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	document.querySelector(".day").innerText = textDay;
	document.querySelector(".hour").innerText = textHour;
	document.querySelector(".minute").innerText = textMinute;
	document.querySelector(".second").innerText = textSecond;

	startDate = new Date(2019, 3, 28).getTime();
	nowDate = new Date().getTime();
	endDate = new Date(2024, 9, 1).getTime();

	gapUpper = endDate - nowDate;
	gapLower = endDate - startDate;
	progressPercentage = Math.floor((gapUpper / gapLower) * 100);

	document.querySelector(".progress-bar").style.width = parseInt(progressPercentage) + '%';
	document.querySelector(".percentage").innerText = progressPercentage + '%';



	
};

setInterval(countdown, 1000)
