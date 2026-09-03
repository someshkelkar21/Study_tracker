let subjects = [
    {
    id: 1,
    name: "maths",
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
        name: "science",
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
        name: "sst",
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
]
function getProgress(subject) {
    let completedCount = 0
let totalTopics =0

for (let i = 0; i<subject.chapters.length; i++) {
for (let j = 0; j <subject.chapters[i].topics.length; j++ ) {
totalTopics++;
if (subject.chapters[i].topics[j].completed) {
completedCount++;
}
}
}
let progress = (completedCount/totalTopics)*100;
return progress;
}
let mathsProgress = getProgress(subjects[0]);
console.log(mathsProgress);
let scienceProgress = getProgress(subjects[1]);
console.log(scienceProgress);
let sstProgress = getProgress(subjects[2]);
console.log(sstProgress);