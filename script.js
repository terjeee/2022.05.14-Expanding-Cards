// ---- // const, let // ---- //

const panels = document.querySelectorAll(`.panel`);

// ---- //addEventListener // ---- //

panels.forEach(panel => {
  panel.addEventListener(`click`, function () {
    // decrease ALL panel sizes, hide ALL text
    panels.forEach(panel => {
      panel.classList.remove(`panel--active`);
      panel.firstElementChild.classList.add(`hidden`);
    });

    // increase panel size, add panel text
    panel.classList.add(`panel--active`);
    panel.firstElementChild.classList.remove(`hidden`);
  });
});
