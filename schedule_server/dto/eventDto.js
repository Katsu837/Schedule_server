module.exports = class UserDto {
    EventName;
    startTimeEvent;
    endTimeEvent;
    eventAddress;

    constructor(model) {
        this.EventName = model.EventName;
        this.startTimeEvent = model.startTimeEvent;
        this.endTimeEvent = model.endTimeEvent;
        this.eventAddress = model.eventAddress;
    }
}