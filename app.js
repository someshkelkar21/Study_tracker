let subject = {
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
             id: 1,
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
}
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
console.log(progress);