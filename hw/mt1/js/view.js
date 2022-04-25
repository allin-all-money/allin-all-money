import componenet from "./component.js";
export default class view {
    constructor(root = new HTMLElement()) {
        this.root = root;
        this.componenet = new componenet(this.root);
    }
    initial(){
        this.componenet.initial(this.root);
    }
    addNote(note_list = new HTMLElement()) {

    }
    deleteNote(){

    }
    completeNote(){

    }
    showProcess(){

    }
    showCompelete(){

    }
    showDelete(){

    }

}