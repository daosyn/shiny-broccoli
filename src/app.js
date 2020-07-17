import m from "mithril";
import Cube from "./models/Cube";
import Home from "./views/Home";
import Photos from "./views/Photos";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loop() {
  while (true) {
    await sleep(1000);
    Cube.move();
    m.redraw();
  }
}

m.route(document.body, "/", {
  "/": Home,
  "/photos": Photos,
});
loop();