// removeListener() 를 사용한 특정 리스너 제거

const EventEmiiter = require("events");

const custom_event = new EventEmiiter();

// 이벤트 등록
custom_event.on("call", function () {
  console.log("이벤트 콜");
});

// custom_event에 등록된 이벤트 삭제
custom_event.removeAllListeners();

custom_event.emit("call"); // 이벤트 강제 발생
