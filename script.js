// ---- // const, let // ---- //

const panels = document.querySelectorAll(`.panel`);

// ---- //addEventListener // ---- //

panels.forEach(panel => {
  panel.addEventListener(`click`, function () {
    // remove panel--active, hide ALL text
    document.querySelector(`.panel--active`)?.classList.remove(`panel--active`);
    panels.forEach(panel => panel.firstElementChild.classList.add(`hidden`));

    // increase panel size, add panel text
    panel.classList.add(`panel--active`);
    panel.firstElementChild.classList.remove(`hidden`);
  });
});
