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
    static bodyContent(item={id:"",title:"",body:"",update:"",status:""}){
        if(item.status.includes(noteStatus[2])){
            item.status=noteStatus[2];
        }
        item.title==""?item.title = "Title":item.title
        return (`
        <div class="note-item" data-id="${item.id}">
        <span>${item.title}</span> 
        <span>${item.body}</span>
        <div>${item.status}</div>
        <span>${item.update}</span>
        </div>`);
    }
    static insert(ParentNode=new Element(),Position="beforeend",item={id:"",title:"",body:"",update:"",status:""}){
        ParentNode.insertAdjacentHTML(Position,this.bodyContent(item));
    }
    
}


/* 
<div class="note-item" data-id="${id}"><span>${title}</span> <span>${body}</span><div></div></div>
*/