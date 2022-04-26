import componenet from "../Component.js";

export default class noteItem extends componenet{
    constructor(){
        super();
    }
    /**
     * To Generating Note item
     * @param {String} id For focus what item is mapping to localstorage
     * @param {String} title The title of Note
     * @param {String} body  The content of Note
     * @param {String} time The time that Note modify
     * @returns void
     */
    static bodyContent(item){
        
        return (`
        <div class="note-item" data-id="${item.id}">
        <span>${item.title}</span> 
        <span>${item.body}</span>
        <span>${item.time}</span
        </div>`);
    }
    static insert(ParentNode=new Element(),Position="beforeend",item={id:"",title:"",body:"",time:""}){
        ParentNode.insertAdjacentHTML(Position,this.bodyContent(item));
    }
    
}


/* 
<div class="note-item" data-id="${id}"><span>${title}</span> <span>${body}</span><div></div></div>
*/