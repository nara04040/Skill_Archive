// Node에서는 이벤트 모듈과 EventEmitter 클래스를 사용하여 이벤트를 처리한다.

// event Module 사용
var events = require("events");

//  EventEmitter 객체 생성
var eventEmitter = new events.EventEmiiter();

// event handler와 event를 연동(bind)한다.
eventEmitter.on("eventName", eventHandler);

// event 발생시킨다.
eventEmitter.emit("eventName");
