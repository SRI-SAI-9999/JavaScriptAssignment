# JavaScriptAssignment
Task management System
# Task Management System

This is a simple task management system built using HTML, CSS, and JavaScript. It allows users to add, edit, delete, and mark tasks as complete. Users can also filter tasks by status (all, pending, completed) and search for tasks by name or description.

## Features

-   **Add Tasks:** Users can add new tasks with a name and description.
-   **Edit Tasks:** Existing tasks can be edited to change their name or description.
-   **Delete Tasks:** Tasks can be deleted from the list.
-   **Toggle Status:** Tasks can be marked as completed or pending.
-   **Filter Tasks:** Tasks can be filtered by status (all, pending, completed).
-   **Search Tasks:** Tasks can be searched by name or description.
-   **Local Storage:** Tasks are stored in the browser's local storage, so they persist across page reloads.
-   **Modern UI:** A clean and modern user interface with a teal color scheme.

## Files

-   **`index.html`:** The HTML structure of the application.
-   **`style.css`:** The CSS styles for the application.
-   **`script.js`:** The JavaScript logic for the application.

## How to Use

1.  **Clone or download the repository.**
2.  **Open `index.html` in your web browser.**
3.  **Add tasks:** Enter a task name and description in the input fields and click the "Add" button.
4.  **Edit tasks:** Click the "Edit" button next to a task and enter the new name and description in the prompts.
5.  **Delete tasks:** Click the "Delete" button next to a task.
6.  **Toggle task status:** Click the "Complete" or "Pending" button next to a task to change its status.
7.  **Filter tasks:** Click the "All," "Pending," or "Completed" buttons to filter the task list.
8.  **Search tasks:** Enter a search term in the search input field.

## JavaScript Logic

-      The `Task` class represents a task with a name, description, completion status, and unique ID.
-      Tasks are stored in the browser's local storage as a JSON string.
-      The `renderTasks()` function dynamically generates the HTML for the task list.
-      Event listeners are attached to the buttons for adding, editing, deleting, toggling status, filtering, and searching tasks.
-      The `filterTasks()` and `searchTasks()` functions filter and search the task list, respectively.
-   The JavaScript does not require any external libraries.

## CSS Styling

-      The CSS styles the application with a clean and modern design.
-      A teal color scheme is used for the main elements.
-   Flexbox is used for responsive layout.
-   Font awesome icons are used.

