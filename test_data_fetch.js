// // Check Deribit Price Index Subscription
// const WebSocket = require("ws");

// var msg = {
//   jsonrpc: "2.0",
//   method: "public/subscribe",
//   id: 42,
//   params: {
//     channels: ["deribit_price_index.btc_usd"],
//   },
// };
// var ws = new WebSocket("wss://test.deribit.com/ws/api/v2");

// function printf(message) {
//   var div = document.getElementById("dc");
//   div.innerHTML = message;
// }


// ws.onmessage = function (e) {
//   // do something with the notifications...
//   js_data = JSON.parse(e.data);

//   try {
//     d = js_data.params.data;
//     msg = d["timestamp"] + d["price"] + d["index_name"];
//     printf(msg);
//   } catch (error) {
//     console.error(error);
//   }
// };

// ws.onopen = function () {
//   ws.send(JSON.stringify(msg));
// };
