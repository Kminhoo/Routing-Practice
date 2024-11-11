import createRouter from "./router.js";

const container = document.querySelector("main");

const pages = {
  home: () => (container.innerText = "HOME PAGE"),
  melon: () => (container.innerText = "MELON PAGE"),
  board: (params) => (container.innerText = `${params.name} ${params.song}`),
};

const router = createRouter();

router
  .addRoute("#/", pages.home)
  .addRoute("#/melon", pages.melon)
  .addRoute("#/melon/:name/:song", pages.board)
  .start();

window.addEventListener("click", (event) => {
  if (event.target.matches("[data-navigate]")) {
    router.navigate(event.target.dataset.navigate);
  }
});