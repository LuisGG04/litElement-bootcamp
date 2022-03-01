import { LitElement } from "lit-element";

export default class GetPosts extends LitElement {

    static get properties(){

        return {}
        
    }

    constructor(){
        super()
    }

    _handleSuccessResp(data){

        this.dispatchEvent(new CustomEvent("success-call", {detail:data}));
    }

    _handleErrorResp(dataErr){
        this.dispatchEvent(new CustomEvent("error-call", {detail:dataErr}));
    }



    getPosts(){
        fetch("./src/helpers/post.json")
            .then((resp) => {this._handleSuccessResp(resp)})
            .catch((err) => {this._handleErrorResp(err)})
    }

}

customElements.define("get-post", GetPosts);