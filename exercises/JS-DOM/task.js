var Task = function(cat, title, pri, est)
{
    this.category = cat;
    this.title = title;
    this.priority = pri;
    this.estimate = est;
    this.spent = 0;
    this.remaining = est;
}

Task.prototype.track = function (hrs)
{
    if (hrs > 0 && parseInt(hrs))
    {
        this.spent += hrs;
        this.remaining -= hrs;
    }
}

Task.prototype.done = function ()
{
    if (this.remaining == 0) return true;
    else return false;
}

Task.prototype.complete = function ()
{
    this.remaining = 0;
}

// module.exports = Task;