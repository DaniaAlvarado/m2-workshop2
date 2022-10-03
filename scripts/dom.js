export class UI {
    constructor(idTarget, nameEvent = 'click', event = () => { }) {
        this.target = document.getElementById(idTarget);
        this.nameEvent = nameEvent,
            this.event = event;
    }

    listenEvent() {
        this.target.addEventListener(this.nameEvent, this.event)
    }
}