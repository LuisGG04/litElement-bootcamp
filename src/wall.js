import { html, LitElement } from "lit-element";
import './components/multipleComments';
import './components/pots';
import GetPosts from './helpers/getPosts';

class Wall extends LitElement{

    static get properties(){
        return{
            posts: {type : Array},
            _dmGetPosts: {type : Object}
        }
    }

    constructor(){

        super()
        this.posts = []
        this._dmGetPosts = new GetPosts();

    }

    handleData(e){

        const detail = e.detail;
        this._dmGetPosts.addEventListener("success-call", this._setPosts.bind(this));
        this._dmGetPosts.addEventListener("error-call", this._showModalError.bind(this));
        this._dmGetPosts.getPosts();

    }

    _showModalError(configError){
        this.errorModal = configError
    }

    _setPosts(data){
        this.posts = data.detail
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