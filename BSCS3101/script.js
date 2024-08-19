const monday = document.body.children[0].children[3].children[0];
const tuesday = document.body.children[0].children[3].children[1];
const wednesday = document.body.children[0].children[3].children[2];
const thursday = document.body.children[0].children[3].children[3];
const friday = document.body.children[0].children[3].children[4];
const saturday = document.body.children[0].children[3].children[5];

window.onload = () => {
    MWF.forEach(sub => {
        const subject = new Subject(sub.code, sub.title, sub.prof, sub.timeDuration, sub.timePosition, sub.subjectColor);
        monday.append(subject.addSub);
        wednesday.append(subject.addSub);
        friday.append(subject.addSub);
    });
    W.forEach(sub => {
        const subject = new Subject(sub.code, sub.title, sub.prof, sub.timeDuration, sub.timePosition, sub.subjectColor);
        wednesday.append(subject.addSub);
    });
    TTH.forEach(sub => {
        const subject = new Subject(sub.code, sub.title, sub.prof, sub.timeDuration, sub.timePosition, sub.subjectColor);
        tuesday.append(subject.addSub);
        thursday.append(subject.addSub);
    });
    SAT.forEach(sub => {
        const subject = new Subject(sub.code, sub.title, sub.prof, sub.timeDuration, sub.timePosition, sub.subjectColor);
        saturday.append(subject.addSub);
    });

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

const MWF = [
    {
        code : 'GE-ELE311',
        title: 'LIVING IN THE IT ERA',
        prof: 'Avila, Ian Celmar',
        timeDuration: 1,
        timePosition: 4.5,
        subjectColor: '#6EDE3F'
    },
    // {                                time conflict
    //     code : 'CS-INTPROG311',
    //     title: 'ALGORITHMS AND COMPLEXITY',
    //     prof: 'Avila, Ian Celmar',
    //     timeDuration: 1,
    //     timePosition: 4.5,
    //     subjectColor: '#6EDE3F'
    // },
    // {
    //     code : 'ENG311',
    //     title: 'PURPOSIVE COMMUNICATION',
    //     prof: 'Fiel, Myrabelle',
    //     timeDuration: 1,
    //     timePosition: 4.5,
    //     subjectColor: '#6EDE3F'
    // },
    {
        code : 'CS-SOFTENG311',
        title: 'SOFTWARE ENGINEERING 1',
        prof: 'Daniot, Elisa',
        timeDuration: 2,
        timePosition: 12,
        subjectColor: '#6EDE3F'
    },
    
];

const W = [
    {
        code : 'CS-COMPTING311',
        title: 'METHODS OF RESEARCH IN COMPUTING',
        prof: 'Tarre, Cheryl',
        timeDuration: 2,
        timePosition: 8,
        subjectColor: '#6EDE3F'
    },
];

const TTH = [
    {
        code : 'CS-APPDEV311',
        title: 'APPLICATION DEVT AND EMERGING TECHNOLOGIES',
        prof: 'Apuya, Jewel',
        timeDuration: 3,
        timePosition: 6,
        subjectColor: '#6EDE3F'
    },
    {
        code : 'IT-FREE-ELE311',
        title: 'BUSINESS ANALYTICS',
        prof: 'Bughao, Ryan',
        timeDuration: 1.5,
        timePosition: 10.5,
        subjectColor: '#6EDE3F'
    },
];

const SAT = [
    {
        code : 'CS-PL311',
        title: 'PROGRAMMING LANGUAGES',
        prof: 'Avila, Ian Celmar',
        timeDuration: 3,
        timePosition: 1,
        subjectColor: '#6EDE3F'
    },
    {
        code : 'CS-IAS311',
        title: 'INFORMATION ASSURANCE AND SECURITY 1',
        prof: 'Daniot, Elisa',
        timeDuration: 3,
        timePosition: 6,
        subjectColor: '#6EDE3F'
    },
]


