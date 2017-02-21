"use strict";
var task_1 = require("./task");
var createTaskManager = function () {
    // tasks variable are private in this case because they aren't exported in the end
    var tasks = [];
    var onChangeCallback;
    function create(category, title, priority, estimate) {
        var task = new task_1.Task(category, title, priority, estimate);
        tasks.push(task);
        onChangeCallback && onChangeCallback(tasks);
        return task;
    }
    ;
    function find(query) {
        query && query.toLowerCase && (query = query.toLowerCase());
        return _filter(function (t) {
            return t.title.toLowerCase().indexOf(query) > -1 || t.category.toLowerCase().indexOf(query) > -1;
        });
    }
    function get(i) {
        return Object.assign({}, tasks[i]);
    }
    function getAll(activeOnly) {
        return _filter(function (task) {
            return !activeOnly || !task.done();
        });
    }
    function remove(index) {
        if (typeof index !== 'number') {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i] === index) {
                    index = i;
                    break;
                }
            }
        }
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            onChangeCallback && onChangeCallback(tasks);
        }
    }
    function onChange(callback) {
        onChangeCallback = callback;
    }
    // underscore used for private functions like filter here
    function _filter(predicte) {
        var matched = [];
        tasks.forEach(function (task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    }
    // better to export like this instead of returning the object, because it shows which functions are being exported and thus, used publicly
    return {
        create: create,
        find: find,
        get: get,
        getAll: getAll,
        remove: remove,
        onChange: onChange
    };
};
