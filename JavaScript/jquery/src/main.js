import $ from "jquery";

$("#app").html('<h1>Hello, jQuery</h1><button id="b">Click</button><p id="out"></p>');
$("#b").on("click", () => $("#out").text("Clicked at " + new Date().toLocaleTimeString()));
