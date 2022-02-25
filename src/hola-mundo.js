import { html, LitElement } from "lit-element";

class HolaMundo extends LitElement {

    static get properties(){
        return {
            quien: {type: String}
        }
    }

    render(){
        return html`
            <p>Hola Mundo</p>
            <hr>
            <p>${this.quien}</p>
        `;
    }

}

customElements.define("hola-mundo", HolaMundo);