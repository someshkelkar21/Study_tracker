let subjects = [];
loadSubjects();
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
let chapterNameInput = document.getElementById("chapterName");
let addChapterButton = document.getElementById("addChapterButton");
let chapterDialog = document.getElementById("chapterDialog");
let topicNameInput = document.getElementById("topicName");
let addTopicDialogButton = document.getElementById("addTopicButton");
let topicDialog = document.getElementById("topicDialog");
let selectedSubjectIndex;
let selectedChapterIndex;

function saveSubjects() {
        localStorage.setItem("subjects", JSON.stringify(subjects));
    }

function loadSubjects() {
    let savedSubjects = JSON.parse(localStorage.getItem("subjects"));

    if (savedSubjects) {
        subjects = savedSubjects;
    }
} 

function getNextId(array) {
    let maxId = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id > maxId) {
            maxId = array[i].id;
        }
    }
    return maxId + 1;
}

addSubButton.className = "addSubButton";
addSubButton.addEventListener("click", function () {
    let name = subjectInput.value;
    if (name.trim() === "") {
        return;
    };
    let newsubject = {
        id: getNextId(subjects),
        name: name,
        chapters: []
    };
     subjects.push(newsubject);
     saveSubjects();
    dashboardSubjects.innerHTML = "";
    sidebarSubjects.innerHTML = "";
    renderDashboard();
    renderSidebar();
    subjectInput.value = "";
});

addChapterButton.addEventListener("click", function () {
    let name = chapterNameInput.value;
    if (name.trim() === "") {
        return;
    }
    let newChapter = {
        id: getNextId(subjects[selectedSubjectIndex].chapters),
        name: name,
        topics: []
    };
    subjects[selectedSubjectIndex].chapters.push(newChapter);
    saveSubjects();
    chapterNameInput.value = "";
    renderDashboard();
    renderSidebar();
    chapterDialog.close();
});

addTopicDialogButton.addEventListener("click", function () {
    let name = topicNameInput.value;
    if (name.trim() === "") {
        return;
    }
    let newTopic = {
        id: getNextId(subjects[selectedSubjectIndex].chapters[selectedChapterIndex].topics),
        name: name,
        completed: false
    };
    subjects[selectedSubjectIndex].chapters[selectedChapterIndex].topics.push(newTopic);
    saveSubjects();
    topicNameInput.value = "";
    renderDashboard();
    renderSidebar();
    topicDialog.close();
});

let container = document.getElementById("dashboardSubjects");

function renderDashboard() {
    dashboardSubjects.innerHTML = "";
    for (let k = 0; k < subjects.length; k++) {
        let subjectCompletionData = getProgress(subjects[k]);
        let dashboardSubjectContainer = document.createElement("div");
        dashboardSubjectContainer.className = "subject-card";
        let subjectNameElement = document.createElement("h2");
        subjectNameElement.textContent = subjects[k].name;
        let completedTopicsElement = document.createElement("p");
        completedTopicsElement.textContent = "Completed Topics: " + subjectCompletionData.completedTopics;
        let totalTopicsElement = document.createElement("p");
        totalTopicsElement.textContent = "Total Topics: " + subjectCompletionData.totalTopics;
        let completedChaptersElement = document.createElement("p");
        completedChaptersElement.textContent = "Completed Chapters: " + subjectCompletionData.completedChapters;
        let totalChaptersElement = document.createElement("p");
        totalChaptersElement.textContent = "Total Chapters: " + subjectCompletionData.totalChapters;
        let progressElement = document.createElement("p");
        if (subjectCompletionData.progress % 1 === 0) {
            progressElement.textContent = "Progress: " + subjectCompletionData.progress + "%";
        } else {
            progressElement.textContent = "Progress: " + subjectCompletionData.progress.toFixed(2) + "%";
        }
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
}

function renderTopics(subject, chapterIndex, sidebarTopicContainer) {
    sidebarTopicContainer.innerHTML = "";

    for (let n = 0; n < subject.chapters[chapterIndex].topics.length; n++) {
        let sidebarTopicElement = document.createElement("div");

        let sidebarTopicCheckbox = document.createElement("input");
        sidebarTopicCheckbox.type = "checkbox";

        sidebarTopicCheckbox.addEventListener("click", function (event) {
            event.stopPropagation();
            subject.chapters[chapterIndex].topics[n].completed = sidebarTopicCheckbox.checked;
            saveSubjects();
            renderDashboard();
        });

        sidebarTopicCheckbox.checked = subject.chapters[chapterIndex].topics[n].completed;

        let sidebarTopicName = document.createElement("span");
        sidebarTopicName.textContent = subject.chapters[chapterIndex].topics[n].name;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            if (confirm("Are you sure you want to delete the topic '" + subject.chapters[chapterIndex].topics[n].name + "'?")) {
                subject.chapters[chapterIndex].topics.splice(n, 1);
                saveSubjects();
                renderDashboard();
                renderSidebar();
            }
        });

        sidebarTopicElement.append(
            sidebarTopicCheckbox,
            sidebarTopicName,
            deleteBtn
        );

        sidebarTopicContainer.append(sidebarTopicElement);
    }

    let addTopicButton = document.createElement("button");
    addTopicButton.textContent = "Add Topic";

    addTopicButton.addEventListener("click", function (event) {
        event.stopPropagation();
        selectedSubjectIndex = subjects.indexOf(subject);
        selectedChapterIndex = chapterIndex;
        topicDialog.showModal();
    });

    sidebarTopicContainer.append(addTopicButton);
}

function renderChapters(subject, sidebarChapterContainer) {
    for (let m = 0; m < subject.chapters.length; m++) {
        let sidebarChapterElement = document.createElement("div");
        let sidebarTopicContainer = document.createElement("div");
        let topicsVisible = false;

        let chapterNameSpan = document.createElement("span");
        chapterNameSpan.textContent = subject.chapters[m].name;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            if (confirm("Are you sure you want to delete the chapter '" + subject.chapters[m].name + "'?")) {
                subject.chapters.splice(m, 1);
                saveSubjects();
                if (selectedChapterIndex === m) {
                    selectedChapterIndex = undefined;
                } else if (selectedChapterIndex > m) {
                    selectedChapterIndex--;
                }
                renderDashboard();
                renderSidebar();
            }
        });

        sidebarChapterElement.addEventListener("click", function (event) {
            event.stopPropagation();
            if (topicsVisible === false) {
                renderTopics(subject, m, sidebarTopicContainer);
                topicsVisible = true;
                selectedSubjectIndex = subjects.indexOf(subject);
                selectedChapterIndex = m;
            } else {
                sidebarTopicContainer.innerHTML = "";
                topicsVisible = false;
                if (subjects.indexOf(subject) === selectedSubjectIndex && selectedChapterIndex === m) {
                    selectedChapterIndex = undefined;
                }
            }
        });

        if (
            subjects.indexOf(subject) === selectedSubjectIndex &&
            m === selectedChapterIndex
        ) {
            renderTopics(subject, m, sidebarTopicContainer);
            topicsVisible = true;
        }

        sidebarChapterElement.append(chapterNameSpan, deleteBtn, sidebarTopicContainer);
        sidebarChapterContainer.append(sidebarChapterElement);
    }

    let addChapButton = document.createElement("button");
    addChapButton.textContent = "Add Chapter";

    addChapButton.addEventListener("click", function (event) {
        event.stopPropagation();
        selectedSubjectIndex = subjects.indexOf(subject);
        chapterDialog.showModal();
    });

    sidebarChapterContainer.append(addChapButton);
}

function renderSidebar() {
    sidebarSubjects.innerHTML = "";
    for (let l = 0; l < subjects.length; l++) {
        let sidebarSubjectContainer = document.createElement("div");
        let sidebarChapterContainer = document.createElement("div");
        sidebarSubjectContainer.className = "sidebarSubject";

        let subjectNameSpan = document.createElement("span");
        subjectNameSpan.textContent = subjects[l].name;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            if (confirm("Are you sure you want to delete the subject '" + subjects[l].name + "'?")) {
                subjects.splice(l, 1);
                saveSubjects();
                if (selectedSubjectIndex === l) {
                    selectedSubjectIndex = undefined;
                    selectedChapterIndex = undefined;
                } else if (selectedSubjectIndex > l) {
                    selectedSubjectIndex--;
                }
                renderDashboard();
                renderSidebar();
            }
        });

        if (l === selectedSubjectIndex) {
            renderChapters(subjects[l], sidebarChapterContainer);
        }

        sidebarSubjectContainer.addEventListener("click", function () {
            if (sidebarChapterContainer.innerHTML === "") {
                renderChapters(subjects[l], sidebarChapterContainer);
                selectedSubjectIndex = l;
            } else {
                sidebarChapterContainer.innerHTML = "";
                if (selectedSubjectIndex === l) {
                    selectedSubjectIndex = undefined;
                    selectedChapterIndex = undefined;
                }
            }
        });

        sidebarSubjectContainer.append(subjectNameSpan, deleteBtn, sidebarChapterContainer);
        sidebarSubjects.append(sidebarSubjectContainer);
    }
}

renderDashboard();
renderSidebar();
