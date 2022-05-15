// ---- // const, let // ---- //

const panels = document.querySelectorAll(`.panel`);

// ---- //addEventListener // ---- //

panels.forEach(panel => {
  panel.addEventListener(`click`, function (event) {
    panels.forEach(panel => panel.classList.remove(`panel--active`));
    panel.classList.add(`panel--active`);
  });
});
