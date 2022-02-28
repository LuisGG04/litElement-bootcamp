import { html, LitElement } from "lit-element";
import './coment';

export default class MultipleComments extends LitElement {

    static get properties(){
        return {
            posts: {type : Array}
        }
    }

    constructor(){

        super();

        this.posts = [];

    }

    render(){
        return html`
        
            <div>

                ${this.posts.map(post => html`
                    <container-coment 
                        title="${post.title}"
                        body="${post.body}">
                    </container-coment>
                `)}

            </div>
        
        `
    }

}

customElements.define("multiple-comments", MultipleComments);