import event from './Event.js';
import leftPanel from './component/leftPanel.js';
import rightPanel from './component/rightPanel.js';
import noteItem from './component/noteItem.js';
import note from './Note.js';

export default class view {
    constructor(root = new HTMLElement()) {
        note.clear()
        leftPanel.insert(root);
        let eventVar = new event()
        eventVar.btnRegEvent(root.querySelector('.control'));
        this.initialRender()
        eventVar.itemEventReg();
    }
    initialRender() {
        let Notes = JSON.parse(note.getNotes());
        //console.log(Notes)
        this.renderNoteItem(Notes)

    }
    renderNoteItem(notes) {
        let noteList = document.querySelector('.note-list');
        for(let i in notes){
            
            let tmp ={
                update:notes[i].update,
                id:i,
                title:notes[i].title,
                body:notes[i].body,
                status:notes[i].status
            }
            
            noteItem.insert(noteList,insertPosition['ab'],tmp)
            
        }
 
 
    }

}