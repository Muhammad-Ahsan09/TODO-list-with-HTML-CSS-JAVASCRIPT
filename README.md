# TODO-list-with-HTML-CSS-JAVASCRIPT

A simple web application to manage a TODO list with due dates.

## Features

- Add tasks with a description and due date
- Delete tasks from the list
- Responsive and user-friendly interface

## How to Use

1. Open `index.html` in a web browser.
2. Enter a task description in the TODO input field.
3. Select a due date.
4. Click the "ADD" button or press "Enter" to add the task to the list.
5. To delete a task, click the "Delete" button next to the task.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>TODO LIST</title>
    <style>
        /* CSS styles go here */
    </style>
</head>
<body>
    <h2>TODO List</h2>
    <div class="todo-input-grid">
        <input type="text" class="js-todo-input" onkeydown="handleKeyEvent(event)" placeholder="TODO">
        <input type="date" class="js-date-input">
        <button onclick="addToList()" class="add-button">ADD</button>
    </div>
    <div class="container"></div>
    <script>
        /* JavaScript code goes here */
    </script>
</body>
</html>
