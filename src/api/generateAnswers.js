const availableYears = [
	1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 
	2000, 2002, 2003, 2004, 
	2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
];

function generateYears(showDate) {
	let answers = [showDate];

	while (answers.length <= 4) {
		var randomYear = availableYears[Math.floor(Math.random()*availableYears.length)];

		if (!answers.includes(randomYear)) {
			answers.push(randomYear);
		}
	}

	return answers;
}

export default generateYears;
