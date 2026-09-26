# Learning Notes

## Things I Have Learned

* A data model is the way we decide what the application will display and how the elements would be organized. It is the blueprint for the app's data.

* Our data model follows a hierarchy:
  Subject → Chapter → Topic.

* `completed` belongs to a topic because JavaScript can automatically calculate the progress for the rest on the basis of the topics.

* Progress is calculated instead of stored because we do not want to update multiple elements each time new data is entered. This prevents errors and keeps the data consistent.

* Chapter completion is also calculated from its topics. A chapter is considered completed only when all of its topics are completed.

* Local Storage is a method to store data in our browser. But it only works locally and is specific to the device.

* We are using Local Storage for V0.1 because it is easy to implement and enough for a starting version.

* Basics of JavaScript:

  * Variables
  * Objects
  * Arrays
  * Array indexes
  * Property access
  * Loops
  * Nested loops
  * Booleans
  * Counters
  * Functions
  * Function parameters and return values
  * `if / else`
  * `.trim()`
  * `.value`
  * `getElementById()`
  * `createElement()`
  * `append()`
  * `textContent`
  * `className`
  * `addEventListener()`
  * Click events
  * `innerHTML`

* `let` variables are scoped to the block/function in which they are declared. A variable created inside a function cannot be directly accessed outside that function.

* Event listeners use a callback function that runs when the specified event happens.

* Event bubbling means an event can move from a child element to its parent elements. `event.stopPropagation()` prevents the event from continuing to the parent.

* A native HTML `<dialog>` can be opened using `.showModal()` and closed using `.close()`.

* A shared dialog can be used for multiple subjects instead of creating a separate dialog for every subject.

* When one shared dialog is used by multiple subjects, we need to remember which subject opened it. We use `selectedSubjectIndex` for this.

* Functions can be created to handle a specific part of rendering. For example, `renderChapters()` handles rendering chapters separately from `renderSidebar()`.

* Reusable functions help avoid duplicating the same rendering logic in multiple places.

* When data changes, we can re-render the UI so that it reflects the updated data.

* `selectedChapterIndex` can be used along with `selectedSubjectIndex` to remember which chapter is currently selected.

* A reusable `renderTopics()` function can handle the rendering of topics separately from `renderChapters()`.

* UI state and application data are different. The `subjects` array is application data, while whether a chapter's topics are currently visible is UI state.

* A boolean can be used to track simple UI states such as whether topics are currently visible.

* When the DOM is re-rendered, the previous DOM state does not automatically remain. If some UI state needs to be preserved, the application may need to remember that state in JavaScript.

* When adding a topic, the topic is pushed into the selected chapter's `topics` array using both `selectedSubjectIndex` and `selectedChapterIndex`.

* New topics start with `completed: false`.

* `splice(index, 1)` can be used to remove one specific item from an array.

* Delete functionality can be implemented at different levels of a nested data structure: subject, chapter, and topic.

* `event.stopPropagation()` is important when a button is placed inside another clickable element, because it prevents the button click from triggering the parent's click event.

* `confirm()` can be used to ask the user for confirmation before performing a destructive action.

* IDs should identify data items independently from their current array positions. After deletion, array indexes can change, but IDs should remain stable.

* A reusable `getNextId()` function can generate a new ID by finding the highest existing ID and adding `1`.

* Deleting an item from the data and then re-rendering the UI keeps the interface synchronized with the application data.


## Things I Don't Understand Yet

* Local Storage and how to use it to save and load the `subjects` data.

## Questions

* How does JavaScript store objects and arrays in Local Storage?
* How does the application load saved data when the page starts?
* When should the application save changes to Local Storage?

## Mistakes I Made

* Tried to put an event listener for the dialog's Add button inside the Add Subject event listener. This meant the dialog listener was only created after Add Subject was clicked.

* Put `subjects.push(newSubject)` outside the function where `newSubject` was created, which caused a scope error because `newSubject` was only available inside that function.

* Forgot to clear `sidebarSubjects` before re-rendering the sidebar, which caused subjects to appear duplicated in the UI.

* Passed the wrong number/order of arguments to `renderChapters()`, which caused `sidebarChapterContainer` to become `undefined` and resulted in an `.append()` error.

* Initially re-rendering the sidebar caused the expanded subject to collapse. We solved this by remembering the selected subject and rendering its chapters again after the sidebar was rebuilt.

* Initially placed the Add Topic button inside the wrong rendering logic, which caused it to disappear or appear outside the intended topic structure after re-rendering.

* Learned that using `innerHTML === ""` to determine whether topics are visible becomes unreliable when the topic container also contains an Add Topic button.

## Important Concepts

* Data model
* Subject → Chapter → Topic hierarchy
* Data as the source of truth
* Derived data
* Function scope
* Variable scope
* Event listeners and callback functions
* Event bubbling
* `event.stopPropagation()`
* DOM manipulation
* Re-rendering UI from data
* Reusable rendering functions
* Native HTML `<dialog>`
* `.showModal()` and `.close()`
* Tracking the selected subject with an index
* Tracking the selected chapter with an index
* Passing arguments to functions
* UI state vs application data
* Boolean state
* Dynamic DOM rendering
* Persistence
* Local Storage
* Array deletion with `splice()`
* Confirmation with `confirm()`
* Event propagation and `event.stopPropagation()`
* Stable IDs
* Array index vs ID
* Reusable helper functions
* Re-rendering after data changes
