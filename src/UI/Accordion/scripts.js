const accordion = {
  init: () => {
    const accordions = document.querySelectorAll('.accordion');
    Array.prototype.forEach.call(accordions, (accordion) => {
      let btn = accordion.querySelector('.accordion__title');
      let target = accordion.querySelector('.accordion__content');

      btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true' || false;

        btn.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
      };
    });
  },
};

export default accordion;
