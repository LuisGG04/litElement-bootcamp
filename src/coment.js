import { html, LitElement } from "lit-element";

export default class Container extends LitElement {

    static get properties(){
        return {
            userName: {type : String},
            title: {type : String},
            body: {type : String},
            date: {type : String},
            avatar: {type : String},
            menuIcon: {type : String}
        }
    }

    constructor(){

        super()
        this.userName = '';
        this.title = '';
        this.body = '';
        this.date = '';
        this.avatar = '';
        this.menuIcon = '';

    }

    handleSubmit(e){
        e.preventDefault();
        this.title = e.detail.title;
        this.body = e.detail.body;
    }

    handleInput(e){
        this.title = e.target.value;
    }

    render(){
        return html`

            <link href="./node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
            <link href="./src/styles/components.css" rel="stylesheet">

            <div class="card text-center" style="max-width: 760px;">
                <div class="card-header d-flex justify-content-between">

                    <img src="${this.avatar}" id="iconCard">

                    <h4>${this.userName} <span><img src="${this.menuIcon}" class="icon-card"></span> </h4>
                    
                </div>

                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.body}</p>
                </div>

                <div class="card-footer text-muted">
                    ${this.date}
                </div>
            </div>

        `;
    }

}

customElements.define("container-coment", Container);