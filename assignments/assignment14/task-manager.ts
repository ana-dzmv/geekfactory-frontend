import { Task } from "./task";

class TaskManager {
    tasks = [];
    onChangeCallback;
    create(category: string, title: string, priority: number, estimate: number) {
        var task = new Task(category, title, priority, estimate);
        this.tasks.push(task);
        return task;
    }

    get(i): Task {
        return this.tasks[i];
    }

    getAll(activeOnly): Task[] {
        return this._filter(function (task) {
            return !activeOnly || !task.done();
        })
    }

    find(query): Task[] {
        query && query.toLowerCase && (query = query.toLowerCase());

        return this._filter(function (t) {
            return t.title.toLowerCase().indexOf(query) > -1 || t.category.toLowerCase().indexOf(query) > -1;
        });
    }

    remove(index) {
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
    }

    onChange(callback) {
        this.onChangeCallback = callback;
    }

    private _filter(predicte): Task[] {
        var matched = [];
        this.tasks.forEach(function (task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    }
}

export function create(): TaskManager {
    var taskManager = new TaskManager();
    return taskManager;
}