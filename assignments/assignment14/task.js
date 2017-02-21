"use strict";
var Task = (function () {
    function Task(category, title, priority, estimate, spent, remaining) {
        this.category = category;
        this.title = title;
        this.priority = priority;
        this.estimate = estimate;
        this.spent = spent;
        this.remaining = remaining;
        this.spent = this.spent || 0;
        this.remaining = this.remaining || this.estimate;
    }
    Task.prototype.track = function (hours) {
        if (hours > 0) {
            this.spent = hours;
            this.remaining -= hours;
        }
    };
    Task.prototype.done = function () {
        return this.remaining == 0;
    };
    Task.prototype.complete = function () {
        this.remaining = 0;
    };
    return Task;
}());
exports.Task = Task;
