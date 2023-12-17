var EventEmiiter = require("events");

var custom_event = new EventEmiiter();

custom_event.on("call", function () {
  console.log("이벤트 콜");
});

custom_event.emit("call");
