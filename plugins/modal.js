function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('my-modal');
  modal.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="my-modal-overlay">
      <div class="my-modal-window">
        <div class="my-modal-header">
          <span class="modal.title">Title</span>
          <span class="my-modal-close">&times;</span>
        </div>
        <div class="my-modal-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            ipsam? Vero aliquid enim perferendis aperiam!
          </p>
        </div>
        <div class="my-modal-footer">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
  </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}
$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;
  return {
    open() {
      !closing && $modal.classList.add('open');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {},
  };
};
