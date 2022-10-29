'use strict';

class ResponseText {
  constructor() {
    this.parent = document.body;
  }

  createText(message) {
    const messageContent = document.createElement('div');
    messageContent.textContent = message;

    this.parent.appendChild(messageContent);
  }
}
