'use strict';

class Modal {
  constructor(
    modalContent = 'Are you sure want to continue',
    modalConfirmText = 'Yes',
    modelCancelText = 'Cancel',
  ) {
    this.modalContent = modalContent;
    this.modalConfirmText = modalConfirmText;
    this.modelCancelText = modelCancelText;

    this.parent = document.body;

    this.modal = undefined;
    this.confirmButton = undefined;
    this.cancelButton = undefined;

    this.createModal();
  }

  createModal() {
    this.modal = document.createElement('dialog');
    this.modal.classList.add('modal-container');
    this.modal.show();

    const window = document.createElement('div');
    window.classList.add('modal-window');
    this.modal.appendChild(window);

    const content = document.createElement('div');
    content.classList.add('modal-content');
    content.textContent = this.modalContent;
    window.appendChild(content);

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('modal-button-group');
    window.appendChild(buttonGroup);

    this.confirmButton = document.createElement('button');
    this.confirmButton.type = 'button';
    this.confirmButton.classList.add('modal-confirm-button');
    this.confirmButton.textContent = this.modalConfirmText;
    buttonGroup.appendChild(this.confirmButton);

    this.cancelButton = document.createElement('button');
    this.cancelButton.type = 'button';
    this.cancelButton.classList.add('modal-cancel-button');
    this.cancelButton.textContent = this.modelCancelText;
    buttonGroup.appendChild(this.cancelButton);

    this.parent.appendChild(this.modal);
  }

  handleClickButton() {
    return new Promise((resolve, reject) => {
      this.confirmButton.focus();

      this.confirmButton.addEventListener('click', () => {
        resolve(`You just clicked ${this.modalConfirmText}`);
        this.deleteModal();
      });

      this.cancelButton.addEventListener('click', () => {
        resolve(`You just clicked ${this.modelCancelText}`);
        this.deleteModal();
      });
    });
  }

  deleteModal() {
    this.parent.removeChild(this.modal);
    delete this;
  }
}
