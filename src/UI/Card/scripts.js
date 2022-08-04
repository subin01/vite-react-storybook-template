const card = {
  init: () => {
    const card = document.querySelector(".card");
    card.onclick = () => {
      alert(`card clicked`);
    };
  },
};

export default card;
