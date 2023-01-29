let fruits = [
  { id: 1, title: 'Apple', price: 20, img: '/images/apple.jpg' },
  { id: 2, title: 'Orange', price: 30, img: '/images/orange.jpg' },
  { id: 3, title: 'Mango', price: 40, img: '/images/mango.jpg' },
];

const toHTML = (fruit) => `
<div class="col">
<div class="card">
  <img
    src="${fruit.img}"
    class="card-img-top"
    style="width: 200px; height: 200px"
    alt="Apple"
  />
  <div class="card-body">
    <h5 class="card-title">${fruit.title}</h5>
    <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">See details</a>
    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Remove</a>
  </div>
</div>
</div>
`;

function render() {
  const html = fruits.map(toHTML).join('');
  document.querySelector('#fruits').innerHTML = html;
}

render();

const priceModal = $.modal({
  title: 'Current prices see below',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Close',
      type: 'primary',
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener('click', (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const fruit = fruits.find((f) => f.id === id);

  if (btnType === 'price') {
    priceModal.setContent(`
    <p>Price for ${fruit.title}: <strong>${fruit.price}$</strong> per Kg</p>`);
    priceModal.open();
  } else if (btnType === 'remove') {
    $.confirm({
      title: 'Are you sure?',
      content: `<p>You are deleting: <strong> ${fruit.title} </strong></p>`,
    })
      .then(() => {
        fruits = fruits.filter((f) => f.id !== id);
        render();
      })
      .catch(() => {
        console.log('Cancel');
      });
  }
});
