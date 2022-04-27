import componenet from "../Component.js";

export default class rightPanel extends componenet{
    static Exist=false;
    constructor(){
        
        super();
    }
    static bodyContent(){
        let id="",title="",body = "";
        return(`
        <div class="right panel" data-id="${id}">
            <input class="note-title" type="text" placeholder="Enter a title..." value="${title}">
            <textarea class="note-content" placeholder="I am the notes body..." value="${body}"></textarea>
        </div>

        `);
    }
    /**
     * Insert the componenet into the ParentNode
     * @param {Element} ParentNode 
     * @param {String} Position beforebegin | afterbegin | beforeend | afterend
     */
     static insert(ParentNode=new Element(),Position="beforeend"){
        ParentNode.insertAdjacentHTML(Position,this.bodyContent());
        this.Exist=true;
        this.xx = "";
    }
    static isExist(){
        return this.Exist;
    }
}

/*
<div class="right panel" data-id="${id}"><input class="note-title" type="text" placeholder="Enter a title..." value="${title}"> <textarea class="note-content" placeholder="I am the notes body..." value="${body}"></textarea></div>
*/