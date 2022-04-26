import event from "./Event.js";
export default class Componenet {
    constructor() {
    }
    /**
     * Insert the componenet into the ParentNode
     * @param {Element} ParentNode 
     * @param {String} Position beforebegin | afterbegin | beforeend | afterend
     */
    static insert(ParentNode=new Element(),Position="beforeend"){
        ParentNode.insertAdjacentHTML(Position,this.bodyContent());
    }
    static bodyContent(){
        return '';
    }
    static getInserPoint(){
        return ;
    }

}