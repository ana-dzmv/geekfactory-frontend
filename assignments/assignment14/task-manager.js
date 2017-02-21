"use strict";
var task_1 = require("./task");
var TaskManager = (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.create = function (category, title, priority, estimate) {
        var task = new task_1.Task(category, title, priority, estimate);
        this.tasks.push(task);
        return task;
    };
    TaskManager.prototype.get = function (i) {
        return this.tasks[i];
    };
    TaskManager.prototype.getAll = function (activeOnly) {
        return this._filter(function (task) {
            return !activeOnly || !task.done();
        });
    };
    TaskManager.prototype.find = function (query) {
        query && query.toLowerCase && (query = query.toLowerCase());
        return this._filter(function (t) {
            return t.title.toLowerCase().indexOf(query) > -1 || t.category.toLowerCase().indexOf(query) > -1;
        });
    };
    TaskManager.prototype.remove = function (index) {
        if (typeof index !== 'number') {
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i] === index) {
                    index = i;
                    break;
                }
            }
        }
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.onChangeCallback && this.onChangeCallback(this.tasks);
        }
    };
    TaskManager.prototype.onChange = function (callback) {
        this.onChangeCallback = callback;
    };
    TaskManager.prototype._filter = function (predicte) {
        var matched = [];
        this.tasks.forEach(function (task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    };
    return TaskManager;
}());
function create() {
    var taskManager = new TaskManager();
    return taskManager;
}
exports.create = create;
