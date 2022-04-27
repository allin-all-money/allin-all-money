import event from "./Event.js";
export default class note {
    constructor() {

    }
    static getNotes() {
        
        let notes = localStorage.getItem('noteApp') ;
        return notes;
    }
    static saveNotes(key="",value={}) {

        let notes = JSON.parse(this.getNotes()) ?? {};
        notes[key]=value;
        localStorage.setItem('noteApp',JSON.stringify(notes));
        
        return notes;
    }
    static removeItem(key=""){
        let notes = JSON.parse(this.getNotes()) ?? {};
        delete notes[key]
        localStorage.setItem('noteApp',JSON.stringify(notes));
    }
    static clear() {
        localStorage.removeItem('noteApp');
    }
}


/*

{
    id:{
        "title":"",
        "body":"",
        "update":""
    }





}

*/