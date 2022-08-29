const accordion = {
  init: () => {
    const accordions = document.querySelectorAll(".accordion");
    Array.prototype.forEach.call(accordions, accordion => {
      let target = accordion.querySelector(".accordion__content");
      let btn = accordion.querySelector(".accordion__title");

      let expanded = btn.getAttribute("aria-expanded") === "true";
      // debugger;
      const setAttrs = show => {
        if (show) {
          target.removeAttribute("hidden");
          btn.setAttribute("aria-expanded", "true");
        } else {
          target.setAttribute("hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      };

      setAttrs(expanded);

      btn.onclick = () => {
        let expanded = btn.getAttribute("aria-expanded") === "true";
        setAttrs(!expanded);
      };
    });
  },
};

export default accordion;
