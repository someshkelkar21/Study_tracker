# Study Tracker - Project Context
## Project

**Study Tracker**

A personal web application for planning, tracking, and measuring study progress.

This is both a useful personal tool and a learning project for improving my software development skills.

Developer

I am a beginner/intermediate learner.

I already know
Basic **HTML**
Basic **CSS**
Basic JavaScript
### Basic Git
Basic GitHub
VS Code
GitHub Pages
I am learning
JavaScript in greater depth
Application architecture
State management
Data persistence
Date/time handling
Advanced Git workflows
Software design
Working effectively with AI coding tools
### Product Vision

The Study Tracker should allow me to:

Manage my subjects.
Add custom subjects in the future.
Enter and organize my syllabus.
Track syllabus completion item by item.
Create a personal workplan.
Create a daily routine.
Track how much time I actually study.
Use a clock.
Use a countdown timer.
Use a stopwatch.
See what has been completed.
See how much remains.
See percentage progress.
Estimate roughly how much time is required to finish remaining work.
Eventually use my historical study data to make time estimates more accurate.

The application should remain useful, simple, and understandable rather than becoming unnecessarily complex.

### Initial Subjects

The initial subjects are:

Maths
Science
**SST**
English
Sanskrit
### Information Technology

These are default subjects, not permanent hard-coded subjects.

The application must eventually allow users to:

Add subjects
Rename subjects
Remove subjects
Technology
Current stack
**HTML**
**CSS**
JavaScript
Browser local storage initially
Git
GitHub
GitHub Pages
AI tools
ChatGPT — planning, learning, architecture, explanations, debugging, code review
Gemini **CLI** — repository inspection and implementation assistance
Frameworks

Do not introduce React, Vue, Angular, or another frontend framework unless there is a clear future reason to do so.

Start with vanilla **HTML**, **CSS**, and JavaScript.

Backend

None initially.

Database

None initially.

Use browser-side persistence initially.

### Core Features
## Subject Management

Users should be able to manage subjects.

Initial default subjects:

Maths
Science
**SST**
English
Sanskrit
### Information Technology

Future functionality:

Add subject
Edit subject
Delete subject
Potentially customize subject color/icon
## Syllabus Management

Each subject should contain syllabus content.

A syllabus may have a hierarchy such as:

Subject → Chapter → Topic

Example:

Maths

Chapter 1
Topic 1
Topic 2
Topic 3
Chapter 2
Topic 1
Topic 2

Syllabus items should be individually trackable.

Possible future states:

Not started
In progress
Completed

The first implementation may use a simpler completion model if that keeps the architecture understandable.

## Progress Tracking

The application should calculate:

Completed items
Remaining items
Total items
Completion percentage

Example:

Maths:

12 / 20 topics completed

60% complete

8 topics remaining

The application should eventually provide both:

Subject-level progress
Overall syllabus progress
## Workplan

The user should be able to create study tasks/workplans.

Example:

Maths — Chapter 4 Exercise 4.2
Science — Revise Chapter 3
English — Learn poem
**SST** — Read Chapter 5

Tasks may eventually contain:

Subject
Syllabus item
Description
Date
Completion status
Estimated time
Actual time
## Daily Routine

The user should be able to create a recurring or reusable daily routine.

Example:

06:00 — Wake up
06:30 — Study
07:30 — Breakfast
08:00 — School
17:00 — Study
19:00 — Dinner
20:00 — Study
22:30 — Sleep

The routine is conceptually different from the workplan.

Routine: When activities normally happen.

Workplan: What needs to be accomplished.

6. Clock

Provide a basic live clock component.

Potential information:

Current time
Date
Day

Keep the first implementation simple.

## Countdown Timer

Provide a timer that supports:

Start
Pause
Resume
Reset

Example:

45:00 → 44:59 → 44:58 ...

## Stopwatch

Provide a stopwatch that supports:

Start
Pause
Resume
Reset

Example:

00:00 → 00:01 → 00:02 ...

## Study Time Tracking

The application should record actual study time.

Eventually the user should be able to see:

Today

Maths — 1h 20m
Science — 45m
English — 30m

Total — 2h 35m

Weekly

Study time grouped by day and/or subject.

Historical data should eventually support statistics and better time estimates.

## Time Estimation

The application should provide a rough estimate of how long remaining work may take.

Initial version:

Allow the user to provide estimated time for tasks/topics.

Future version:

Compare estimated time with actual study time.
Calculate personal averages.
Use historical data to improve future estimates.

Example:

Estimated:

60 minutes

Actual:

75 minutes

Over time the application may learn that the user's average actual time is approximately 1.25× their initial estimate.

Future goal:

18 topics remaining

Estimated remaining time:

~11 hours 20 minutes

These estimates should always be treated as approximate.

**MVP** Roadmap

The project will be built incrementally.

Version 0.1 — Syllabus Foundation

Goal:

Build the smallest useful version of the Study Tracker.

Features:

Subjects
Syllabus structure
Syllabus items
Completion/checking
Progress calculations
Basic dashboard
Version 0.2 — Workplan

Features:

Create study tasks
Assign tasks to subjects
Assign dates
Mark tasks complete
Estimated task duration
Basic daily workplan
Version 0.3 — Time Tools

Features:

Clock
Countdown timer
Stopwatch
Version 0.4 — Study Time Tracking

Features:

Record study sessions
Associate sessions with subjects
Track daily study time
Track weekly study time
Basic statistics
Version 0.5 — Daily Routine

Features:

Create routine items
Assign times
View daily routine
Support recurring routine items
Version 0.6 — Time Estimation

Features:

Estimate remaining study time
Compare estimated vs actual time
Use historical data for improved estimates
### Future Ideas

These are intentionally outside the current scope.

Possible future features:

Charts and graphs
Advanced analytics
Cloud synchronization
User accounts
Mobile application
Notifications
Calendar integration
AI-generated study plans
Advanced scheduling
More sophisticated estimation
Themes/customization

Do not implement future ideas until the current roadmap stage is working.

### Architecture Principles
Keep it simple

Prefer the simplest solution that works.

Do not introduce unnecessary libraries, frameworks, APIs, or services.

Understand before implementing

AI-generated code should not be accepted blindly.

Important code should be explained and understood before being kept.

Incremental development

Build small features, test them, commit them, then continue.

Avoid large rewrites.

Preserve working code

Do not rewrite functioning code unnecessarily.

Prefer small, targeted changes.

Data-driven design

Subjects and syllabus should eventually be represented as data rather than hard-coded UI.

The application should be designed so new subjects and syllabus items can be added without changing the application logic.

### Git Workflow

Normal development cycle:

Make a small change.
Test it.
Run git status.
Review changes with git diff.
Stage changes with git add.
Commit with a meaningful message.
Push to GitHub.

Example:

git status
git diff
git add .
git commit -m *Add syllabus progress tracking*
git push


Git commits should represent meaningful checkpoints.

AI Workflow
ChatGPT

Use ChatGPT primarily for:

Learning concepts
Planning
Product decisions
Architecture
Explaining code
Debugging
Reviewing approaches
Breaking large tasks into smaller tasks

ChatGPT should act as a mentor and development partner.

Gemini **CLI**

Use Gemini **CLI** primarily for:

Inspecting the repository
Understanding existing code
Finding relevant files
Implementing agreed changes
Refactoring when appropriate
Running repository-related tasks

Gemini should not be told to blindly build the entire application.

Human control

The developer remains responsible for:

Understanding changes
Reviewing AI-generated code
Testing changes
Deciding whether changes should be kept
Committing changes to Git
### Learning Notes

Use **LEARNING**-**NOTES**.md to record concepts learned during development.

Examples:

JavaScript concepts
Git commands
Architecture decisions
Bugs and their causes
Useful patterns
Mistakes and lessons

The goal is not just to finish the application.

The goal is to become a better developer while building it.

### Current Project State
## Current Session
We completed the initial architecture discussion for v0.1.

### Decisions
- Subject → Chapter → Topic hierarchy
- Numeric IDs
- Topic has a completed state
- Progress is calculated, not stored
- localStorage will be used for persistence

### Next Task
Begin implementing the JavaScript data structure for v0.1.

### Development Approach
The developer is learning through this project.
Act as a teacher/mentor.
Do not blindly generate code.
Explain concepts and guide implementation.
Correct misunderstandings rather than encouraging them.


### Development Schedule

Target development time:

Approximately 30 minutes on weekdays
Approximately 90 minutes on Saturday
Approximately 90 minutes on Sunday
Approximately 5.5 hours per week

The project is expected to take several months.

Progress is more important than speed.

AI Instructions

I am a beginner/intermediate developer learning by building.

Do not explain basic **HTML**/**CSS** unless requested.

Do not assume I understand advanced JavaScript or architecture.

When introducing a new concept:

Explain what it is.
Explain why we need it.
Show a small example when useful.
Let me understand it before moving on.

When proposing significant code changes:

Explain the goal.
Explain the approach.
Identify which files will change.
Make the smallest sensible change.
Test the change.
Explain what was learned.

Do not rewrite working code unnecessarily.

Do not introduce frameworks or dependencies without discussing why they are needed.

Do not implement future features prematurely.

If project requirements are unclear, ask before making assumptions.

PROJECT_CONTEXT.md is the source of truth for the current project state.