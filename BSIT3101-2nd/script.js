const MON = document.body.children[0].children[3].children[0];
const TUE = document.body.children[0].children[3].children[1];
const WED = document.body.children[0].children[3].children[2];
const THU = document.body.children[0].children[3].children[3];
const FRI = document.body.children[0].children[3].children[4];
const SAT = document.body.children[0].children[3].children[5];

// 6 length
const days = [MON, TUE, WED, THU, FRI, SAT];

class Subject{
	constructor( code, name, profName, time, color = 'gray'){
		this.code = code,
		this.name = name,
		this.profName = profName,
		this.time = time;
		this.subjectColor = color
	}

	get subjectDuration(){
		const time = this.time;
		let dt = [];
		const duration = [
			//     hh:mm             meridian
			[time.substring(0,5), time.substring(6,10)],		// starting time
			[time.substring(13,18), time.substring(19,23)]	// end time
		];
		for(let a = 0; a < duration.length; a++){
			const offset = 7;
			const pmOff = 1;
			let hour = Number(duration[a][0].substring(0,2));
			let min = Number(duration[a][0].substring(3,5)) / 60;

			if(duration[a][1] == "P.M." && hour !== 12) hour+=12; //from chatgpt
			if(duration[a][1] == "A.M." && hour === 12) hour=0;		//

			dt.push(Math.abs(Number(hour+min) - offset));
		}
		return Math.abs(dt[0]-dt[1]) * 4;
	}

	get subjectPosition(){
		const time = this.time;
		const hour = Number(time.substring(0,2));
		const min = Number(time.substring(3,5)) / 60;
		return Math.abs(Number(hour+min) - 7) * 4;
	}

	get addSub(){
		const subject = document.createElement('button');
		subject.classList.add('subject');
		subject.textContent = this.code;
		subject.setAttribute('data-code',this.code);
		subject.setAttribute('data-subTitle',this.name);
		subject.setAttribute('data-prof',this.profName);
		subject.setAttribute('data-bg',this.subjectColor);
		console.log(`he: ${this.subjectDuration}rem`);
		console.log("pos: "+this.subjectPosition + 'rem');
		subject.style.height = `${this.subjectDuration}rem`;
		subject.style.position = `absolute`;
		subject.style.top = this.subjectPosition + 'rem';
		subject.style.backgroundColor = this.subjectColor + '';
		return subject;
	}
}

// 9 size for 9 subjects
const subsColors = ["#FFC0CB", "#FF9999", "#FFB6C1", "#90EE90", "#98FB98", "#CCFFCC", "#ADD8E6", "#87CEFA", "#B0E0E6"];

window.onload = () => {
	for(let a = 0; a<subsColors.length; a++){
		subjects[a]["subjectColor"] = subsColors[a];
	}

	for(let a = 0; a < days.length; a++){ 									// day
		for(let b = 0; b < subjects.length; b++){ 						//sub

			const subject = new Subject(subjects[b]["course-code"], 
														subjects[b]["subject-name"], 
														subjects[b]["instructor"], 
														subjects[b]["time"], // total
														subjects[b]["subjectColor"]);

			if(subjects[b].days.length > 1){										//subjec days if more 3
				for(let c = 0; c < subjects[b].days.length; c++){ //appending this sub to this day in arr
					if((days[a].id.toUpperCase().substring(0,3)) == subjects[b].days[c]){
						days[a].append(subject.addSub);
						// getDuration(subjects[b].time);
						// console.log(subject);
					}
				}
				continue;
			}
			
			if((days[a].id.toUpperCase().substring(0,3)) == subjects[b].days){
	    	days[a].append(subject.addSub);
			}
		}
	}	
	
	const subjectBtt = document.querySelectorAll('.subject');
	subjectBtt.forEach(button => {
		button.addEventListener('click', ()=>{
			if(button.children.length >= 1){
				button.children[0].remove();                                          
			}else{
				const subCon = document.createElement('div');
				const code = document.createElement('h3');
				const title = document.createElement('h3');
				const prof = document.createElement('h3');

				title.textContent = button.getAttribute('data-subtitle');
				prof.textContent = button.getAttribute('data-prof');

				subCon.append(code, title, prof);
				subCon.classList.add('details');
				subCon.style.backgroundColor = button.getAttribute('data-bg');

				// subCon.addEventListener('click', toggle);
				button.append(subCon);
			}
		});
	});
}
    
function getDuration(time){
	console.log(time);
	let dt = [];
	const duration = [
		//     hh:mm             meridian
		[time.substring(0,5), time.substring(6,10)],		// starting time
		[time.substring(13,18), time.substring(19,23)]	// end time
	];
	for(let a = 0; a < duration.length; a++){
		const offset = 7;
		const pmOff = 1;
		let hour = Number(duration[a][0].substring(0,2));
		let min = Number(duration[a][0].substring(3,5)) / 60;

		if(duration[a][1] == "P.M." && hour !== 12) hour+=12; //from chatgpt
		if(duration[a][1] == "A.M." && hour === 12) hour=0;		//

		// if(duration[a][1] == "A.M."){	
		// 	continue;
		// }else{
		// 	dt.push(Math.abs(Number((hour)+min) - (offset)));
		// 	continue;
		// }
		dt.push(Math.abs(Number(hour+min) - offset));
	}
	// console.log(dt);
	console.log(`dur: ${Math.abs(dt[1]-dt[0])} time: [${dt}]`);
	// console.log(dt[1]-dt[0]);
}


const subjects = [
	{
		"course-code": "IT-FREE-ELE321",
		"subject-name": "ANIMATION TECHNOLOGY & 2D",
		"days": [
			"MON",
			"WED",
			"FRI"
		],
		"time": "10:30 A.M. - 12:30 P.M.",
		"room": "LAB2",
		"instructor": "Quirino, Francis Rodulfo"
	},
	{
		"course-code": "IT-AIS321",
		"subject-name": "INFORMATION ASSURANCE & SECURITY",
		"days": [
			"SAT"
		],
		"time": "08:30 A.M. - 12:00 N.N.",
		"room": "LAB5",
		"instructor": "Danio, Roel"
	},
	{
		"course-code": "IT-ELE321",
		"subject-name": "INTEGRATIVE PROGRAMMING & TECHNOLOGIES",
		"days": [
			"MON",
			"WED",
			"FRI"
		],
		"time": "06:00 P.M. - 08:00 P.M.",
		"room": "LAB3",
		"instructor": "Avila, Ian Celmar"
	},
	{
		"course-code": "IT-FREE-ELE322",
		"subject-name": "INTELLIGENT SYSTEMS",
		"days": [
			"TUE",
			"THU"
		],
		"time": "04:00 P.M. - 07:00 P.M.",
		"room": "LAB4",
		"instructor": "Cantero, Joscoro"
	},
	{
		"course-code": "ITPRO321",
		"subject-name": "IT PROPOSAL",
		"days": [
			"TUE",
			"THU"
		],
		"time": "01:00 P.M. - 02:00 P.M.",
		"room": "RoboLAB",
		"instructor": "Tarre, Cheryl"
	},
	{
		"course-code": "IT-FREE-ELE322",
		"subject-name": "ANALYSIS MODELLING: TECHNIQUES & TOOLS",
		"days": [
			"TUE",
			"THU"
		],
		"time": "07:30 A.M. - 10:00 A.M.",
		"room": "LAB2",
		"instructor": "Cohat, Alexander"
	},
	{
		"course-code": "GE-ELE3221",
		"subject-name": "ENVIROMENTAL SCIENCE",
		"days": [
			"SAT"
		],
		"time": "01:00 P.M. - 03:00 P.M.",
		"room": "RoboLAB",
		"instructor": "Magallanes, Regie"
	},
	{
		"course-code": "PSYCH321",
		"subject-name": "UNDERSTANDING THE SELF",
		"days": [
			"MON",
			"WED",
			"FRI"
		],
		"time": "05:00 P.M. - 06:00 P.M.",
		"room": "RoboLAB",
		"instructor": "Fiel, Myrabelle"
	},
	{
		"course-code": "RIZAL 321",
		"subject-name": "LIFE & WORKS OF DR. JOSE RIZAL",
		"days": [
			"MON",
			"WED",
			"FRI"
		],
		"time": "09:30 A.M. - 10:30 A.M.",
		"room": "RoboLAB",
		"instructor": "Cotiangco, Joshua"
	}
];


