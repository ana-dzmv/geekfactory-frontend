export class Task {
    constructor(
        public category: string,
        public title: string,
        public priority: number,
        public estimate: number,
        public spent?: number,
        public remaining?: number) {
        this.spent = this.spent || 0;
        this.remaining = this.remaining || this.estimate;
    }

    track(hours: number) {
        if (hours > 0) {
            this.spent = hours;
            this.remaining -= hours;
        }
    }

    done(): boolean {
        return this.remaining == 0;
    }

    complete() {
        this.remaining = 0;
    }
}