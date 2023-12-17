var EventEmiiter = require("events");

var custom_event = new EventEmiiter();

// 이벤트 등록
custom_event.on("call", function () {
  console.log("이벤트 콜");
});

custom_event.emit("call"); // 이벤트 강제 발생
