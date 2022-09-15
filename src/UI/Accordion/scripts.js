const accordion = {
  init: () => {
    const accordions = document.querySelectorAll(".accordion");
    Array.prototype.forEach.call(accordions, accordion => {
      let target = accordion.querySelector(".accordion__content");
      let btn = accordion.querySelector(".accordion__title");

      let isExpanded = btn.getAttribute("aria-expanded") === "true";
      const setAttrs = show => {
        if (show) {
          target.hidden = false;
          btn.setAttribute("aria-expanded", "true");
        } else {
          target.hidden = true;
          btn.setAttribute("aria-expanded", "false");
        }
      };

      setAttrs(isExpanded);

      btn.onclick = () => {
        let isExpanded = btn.getAttribute("aria-expanded") === "true";
        setAttrs(!isExpanded);
      };
    });
  },
};

export default accordion;
