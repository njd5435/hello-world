// thus
import { html, css, LitElement } from 'lit';
//exports the variables which means some other file can do the above 'import against the class HelloWorld
export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },//data type in question, this block can define other things as well
      counter: { type: Number },
    };
  }
//class based development of any kind theres always a constructor
  constructor() {
    super();
    this.title = 'Hey there';//default value
    this.counter = 5;//default value
  }
  
  //call back will add 1 to counter

  __increment() {
    this.counter += 1;
  }
  __decrease(){
    if(this.counter>0){this.counter-=1;}
      else{this.counter=0;};
  }
  //render is a callback in lit that will actually render the element in question

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrease}>decrease</button>
    `;
    // makes it into html to load
  }

}
