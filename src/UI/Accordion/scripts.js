const details = {
  handleToggle: e => {
    console.log(e);
    e.preventDefault();
    let el = e.target.closest("details");
    // let isOpen = el.open || false;

    let groupParent = e.target.closest(".accordions-group");
    let siblingAccordions = groupParent.querySelectorAll("details");

    Array.prototype.forEach.call(siblingAccordions, accordion => {
      accordion.open = false; // close all siblings
    });
    el.open = true; // open clicked item
  },

  init: () => {
    const groupedAccordions = document.querySelectorAll(".accordions-group summary");
    Array.prototype.forEach.call(groupedAccordions, accordionTitle => {
      accordionTitle.onclick = details.handleToggle;
    });
  },
};

export default details;
