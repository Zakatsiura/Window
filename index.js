const modal = $.modal({
  title: 'My modal',
  closable: true,
  content: `<h4>It is working</h4> <p>That's nice!</p>`,
  width: '400px',
  footerButtons: [
    {
      text: 'OK',
      type: 'primary',
      handler() {
        console.log('Button clicked');
        modal.close();
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Button clicked again');
        modal.close();
      },
    },
  ],
});
