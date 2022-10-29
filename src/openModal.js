async function openModal(modalContent, modalConfirmText, modelCancelText) {
  this.myModal = new Modal(modalContent, modalConfirmText, modelCancelText);
  this.response = new ResponseText();
  try {
    const modalResponse = await myModal.handleClickButton();
    this.response.createText(modalResponse);
  } catch (err) {
    console.log(err);
  }
}
