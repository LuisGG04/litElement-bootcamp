import { html, LitElement } from "lit-element";

export default class Post extends LitElement {

    static get properties(){
        return {
            userName: {type : String},
            title: {type : String},
            body: {type : String},
            date: {type : String},
            avatar: {type : String},
            menuIcon: {type : String},
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

        this.dispatchEvent(new CustomEvent('data-submit', {
            detail: {
                title : this.title,
                body : this.body
            }
        }));
    }

    handleInput(e){
        this.title = e.target.value;
    }

    handleBody(e){
        this.body = e.target.value;
    }

    render(){
        return html`

            <link href="./node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
            <link href="./src/styles/components.css" rel="stylesheet">

            <form class="card text-center" style="max-width: 760px;" @submit="${this.handleSubmit}">
                <div class="card-header d-flex justify-content-between align-items-center">

                    <div class="input-group" style="max-width: 350px">
                        <img src="${this.avatar}" id="iconCard">
                        <input type="file" id="inputGroupFile01" class="input__file ms-3">
                    </div>

                    <h4>${this.userName} <span><img src="${this.menuIcon}" class="icon-card"></span> </h4>
                    
                </div>

                <div class="card-body">
                    <input class="card-title" value="${this.title}" type="text" @input="${this.handleInput}"/>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" @input="${this.handleBody}"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>

                <div class="card-footer text-muted">
                    <button type="submit">Enviar</button>
                </div>
            </form>

        `;
    }

}

customElements.define("post-container", Post);