import { html, LitElement } from "lit-element";
import './multipleComments';
import './pots';

class Wall extends LitElement{

    static get properties(){
        return{
            posts: {type : Array}
        }
    }

    constructor(){

        super()
        this.posts = []

    }

    handleData(e){

        const detail = e.detail;

        this.posts.push(detail);
        this.posts = JSON.parse(JSON.stringify(this.posts));

    }

    render(){
        return html`
        
        <post-container 
            @data-submit="${this.handleData}"
        ></post-container>

        <multiple-comments
            .posts='${this.posts}'
        >
        </multiple-comments>
        
        `
    }

}

customElements.define("wall-container", Wall)