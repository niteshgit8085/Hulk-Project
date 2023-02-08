import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {
  @track buttons = [];

  connectedCallback() {
    for (let i = 0; i < 5; i++) {
      let button = document.createElement('button');
      button.textContent = `Button ${i}`;
      button.addEventListener('click', () => {
        console.log(`Button ${i} clicked!`);
      });
      this.buttons.push(button);
    }
  }

  renderedCallback() {
    const container = this.template.querySelector('#button-container');
    this.buttons.forEach(button => {
      container.appendChild(button);
    });
  }
}


