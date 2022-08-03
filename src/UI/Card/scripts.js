import $ from 'blingblingjs'; // es6 module

const card = {
  init: () => {
    const [card] = $('.card');
    card.on('click', (e) => {
      alert(`card clicked`);
    });
  },
};

export default card;
