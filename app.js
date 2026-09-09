let subjects = [
    {
    id: 1,
    name: "Maths",
    chapters: [
        {
            id: 1,
            name: "Linear Equations",
            topics: [
                {
                    id: 1,
                    name: "Variables",
                    completed: true,
                },
                {
                    id: 2,
                    name: "Solving Equations",
                    completed: false,
                },
                {
                    id: 3,
                    name: "Word Problems",
                    completed: true,
                }
            ]
        },
        {
             id: 2,
            name: "Triangles",
            topics: [
                {
                    id: 1,
                    name: "Thales Theorem",
                    completed: true,
                },
                {
                    id: 2,
                    name: "Similarity",
                    completed: false,
                },
                {
                    id: 3,
                    name: "Mixed Problems",
                    completed: false,
                }
        
    ]
}
    ]
    },
    {
        id: 2,
        name: "Science",
        chapters: [
            {
                id:1,
                name: "matter in our surroundings",
                topics: [
                    {
                        id:1,
                        name: "states of matter",
                        completed: true,
                    },
                    {
                        id:2,
                        name: "change of state",
                        completed: true,
                    },
                    {
                        id:3,
                        name: "evaporation",
                        completed: false,
                    },
                ]
            },
            {
                id:2,
                name: "atoms and molecules",
                topics: [
                    {
                        id:1,
                        name: "laws of chemical combination",
                        completed: true,
                    },
                    {
                        id:2,
                        name: "atomic mass",
                        completed: false,
                    },
                    {
                        id:3,
                        name: "molecules and chemical formulae",
                        completed: false,
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Sst",
        chapters: [
            {
                id:1,
                name: "the french revolution",
                topics: [
                    {
                        id:1,
                        name: "causes of the revolution",
                        completed: false,
                    },
                    {
                        id:2,
                        name: "french society",
                        completed: false,
                    },
                    {
                        id:3,
                        name: "impact of the revolution",
                        completed: true,
                    },
                ]
            },
            {
                id:2,
                name: "socialism in europe",
                topics: [
                    {
                        id:1,
                        name: "rise of socialist ideas",
                        completed: false,
                    },
                    {
                        id:2,
                        name: "russian revolution",
                        completed: false,
                    },
                    {
                        id:3,
                        name: "impact of socialism",
                        completed: true,
                    },
                ]
            }
        ]
    },
     {
        id: 4,
        name: "English",
        chapters: [
            {
                id:1,
                name: "First Flight",
                topics: [
                    {
                        id:1,
                        name: "A Letter to God",
                        completed: true,
                    },
                    {
                        id:2,
                        name: "Nelson Mandela: Long Walk to Freedom",
                        completed: true,
                    },
                    {
                        id:3,
                        name: "Two Stories About Flying",
                        completed: true,
                    },
                ]
            },
            {
                id:2,
                name: "Footprint Without Feet",
                topics: [
                    {
                        id:1,
                        name: "A Triumph of Surgery",
                        completed: false,
                    },
                    {
                        id:2,
                        name: "The Theif's Story",
                        completed: true,
                    },
                    {
                        id:3,
                        name: "The Midnight Visitor",
                        completed: false,
                    },
                ]
            }
        ]
    },
]
function getProgress(subject) {
    let completedTopics = 0
let totalTopics =0
let completedChapters =0
let totalChapters =subject.chapters.length
for (let i = 0; i<subject.chapters.length; i++) {
    let chapterCompleted = true;
for (let j = 0; j <subject.chapters[i].topics.length; j++ ) {
    if (subject.chapters[i].topics[j].completed === false){
        chapterCompleted = false;
    }
totalTopics++;
if (subject.chapters[i].topics[j].completed) {
completedTopics++;
}
}
if (chapterCompleted){
    completedChapters++;
}
}
let progress = (completedTopics/totalTopics)*100;
let subjectCompletionData = {
    completedTopics,
    totalTopics,
    completedChapters,
    totalChapters,
     progress,
}
return subjectCompletionData;
}
let subjectInput = document.getElementById("subjectName");
let addSubButton = document.getElementById("addSubButton");
addSubButton.className = "addSubButton";
addSubButton.addEventListener("click", function () {
    let name = subjectInput.value;
    if (name.trim() === "") {
        return
    };
    let newsubject = {
    id: subjects.length + 1,
    name: name,
    chapters: []
};

subjects.push(newsubject);
dashboardSubjects.innerHTML = "";
sidebarSubjects.innerHTML = "";
renderSubjects();
subjectInput.value = "";
}
);
let container = document.getElementById("dashboardSubjects");

function renderSubjects() {
for (let k = 0; k < subjects.length; k++) {
    let subjectCompletionData = getProgress(subjects[k]);
    let dashboardSubjectContainer = document.createElement("div");
    dashboardSubjectContainer.className = "subject-card";
    let subjectNameElement = document.createElement("h2");
    subjectNameElement.textContent = subjects[k].name;
    let completedTopicsElement = document.createElement("p");
    completedTopicsElement.textContent = "Completed Topics: " +subjectCompletionData.completedTopics;
    let totalTopicsElement = document.createElement("p");
    totalTopicsElement.textContent = "Total Topics: " +subjectCompletionData.totalTopics;
    let completedChaptersElement = document.createElement("p");
    completedChaptersElement.textContent = "Completed Chapters: " +subjectCompletionData.completedChapters;
    let totalChaptersElement = document.createElement("p");
    totalChaptersElement.textContent = "Total Chapters: " +subjectCompletionData.totalChapters;
    let progressElement = document.createElement("p");
    if (subjectCompletionData.progress%1 === 0){
        progressElement.textContent = "Progress: " +subjectCompletionData.progress+"%";
    }
    else {
        progressElement.textContent = "Progress: " +subjectCompletionData.progress.toFixed(2)+"%";}
     progressElement.className = "progress";
        dashboardSubjectContainer.append(
    subjectNameElement,
    completedTopicsElement,
    totalTopicsElement,
    completedChaptersElement,
    totalChaptersElement,
    progressElement
);
dashboardSubjects.append(dashboardSubjectContainer);
}   
for (let l =0; l < subjects.length; l++) {
    let sidebarSubjectContainer = document.createElement("div");
    let sidebarChapterContainer = document.createElement("div");
    sidebarSubjectContainer.className = "sidebarSubject";
    sidebarSubjectContainer.textContent = subjects[l].name;
    sidebarSubjectContainer.addEventListener("click", function () {
        if (sidebarChapterContainer.innerHTML === ""){
        for (let m =0; m < subjects[l].chapters.length; m++) {
           let sidebarChapterElement = document.createElement("div");
            sidebarChapterElement.textContent = subjects[l].chapters[m].name;
            sidebarChapterContainer.append(
                sidebarChapterElement,
            );
            sidebarSubjectContainer.append(
                sidebarChapterContainer,
            );
        }
        }
        else {sidebarChapterContainer.innerHTML = ""};
});
    sidebarSubjects.append(sidebarSubjectContainer,
    );
}
};

renderSubjects();   