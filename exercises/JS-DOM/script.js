(function (scope) {
    "use strict"; // declaring that you'll abide to one type of ECMAscript; NEVER declare it in global scope

    var new_form = document.querySelector('new-todo'); // return back an element; "querySelector" can call back by Tags, Ids, Classes etc.
    var tasksContainer = document.querySelector('#tasks');
    var taskManager = createTaskManager();


    new_form && new_form.addEventListener('submit', addTask); // ensuring that the form exists in the first place
    var edit_form = document.querySelector('edit-todo');

    edit_form && edit_form.addEventListener('submit', editTask);

    taskManager.onChange(update); // execute "update" every time something is being changed

    function addTask(event) {
        event.preventDefault(); // reset the default action the event does; in this instance, don't reload the page, even though you're a form
        var task = {};
        // in next line we use "target" instead of "form" for the sake of generity
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            task[input.name] = input.value; // basically from knowing the name of the input, we know which one is going to be entered without repeating code
            input.value = null;
        });
        taskManager.create(task.category, task.title, task.priority, task.estimate);
    }

    // update regenerates the whole DOM tree to refresh the UI; is not necessary in reactive JS like Angular
    function update(tasks) {
        while (tasksContainer.hasChildNodes()) {
            tasksContainer.removeChild(tasksContainer.lastChild); // we're removing all the children (not efficient) so that if a task is removed, you re-display the existing ones
        }

        tasks.forEach(function (task) {
            tasksContainer.appendChild(createTaskRow(task));
        });
        //loadTasks();        
        //localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    function editTask(event) {
        var tasks = taskManager.getAll();
        var task = tasks.indexOf(i);
        event.preventDefault();
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            task[input.name] = input.value;
            input.value = null;
        });
        taskManager.onChange(update);

    }

    function createTaskRow(task) {
        var tr = document.createElement('tr');
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() && '&#10004;')); // return either a symbol or (bool) false is the task isn't done
        var delete_link = document.createElement('a');
        delete_link.innerHTML = 'Delete';
        tr.appendChild(delete_link);
        delete_link.addEventListener('click', function () { taskManager.remove(task) })

        var edit_link = document.createElement('a');
        edit_link.innerHTML = ' | Edit';
        tr.appendChild(edit_link);
        edit_link.addEventListener('click', function () {
            var edit_form = document.getElementById("edit-todo");
            edit_form.querySelectorAll('input:not([type="submit"])').forEach(function (input) {
                input.value = task[input.name];
                input.disabled = false;
            });
            var apply_button = document.getElementById("apply_button").disabled = false;
            edit_form.addEventListener('submit', editTask);
        });

        // function editTask(event) {
        //     // event.preventDefault();
        //     // event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
        //     //     task[input.name] = input.value;
        //     //     input.value = null;
        //     // });
        //     // taskManager.onChange(update);
        // }

        return tr;
    }



    function createTableCell(text) {
        var td = document.createElement('td');
        if (text) {
            var text = document.createTextNode(text); // the if condition prevents of the code being executed if what is returned is false
            td.appendChild(text);
        }
        return td;
    }

    function storeTasks() {
        // finish later
    }

    function loadTasks() {
        if (typeof scope.localStorage !== undefined) {
            var tasks = JSON.parse(scope.localStorage.getItem('tasks'));
            tasks && tasks.forEach(function (task) {
                taskManager.create(task.category, task.title, task.priority, task.estimate);
            })
        }
    }

})(window);

