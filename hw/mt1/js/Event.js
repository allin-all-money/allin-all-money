import note from "./Note.js";
import noteItem from "./component/noteItem.js";
import rightPanel from "./component/rightPanel.js";
export default class event {
    constructor() {

    }

    selectRegEvent(select = new HTMLElement()) {
        select.addEventListener('change', () => {

            let v = document.querySelector('select');
            console.log(v.value);
        });
    }

    btnRegEvent(control = new HTMLElement()) {
        let btn = control.querySelectorAll('.btn');
        btn.forEach(i => {
            let label = i.textContent;
            i.addEventListener('click', () => {
                let row = control.querySelectorAll('.row');
                let noteitem = document.querySelectorAll('.note-item');
                let list = document.querySelector('.note-list');
                let seq;

                switch (label) {
                    case "New":
                        this.newNote(control)
                        break;
                    case "Delete":
                        deleteNote()
                        break;
                    case "Complete":
                        completeNote()
                        break;
                    case "Cancel":

                        seq = [1, 0, 0, 1]
                        row.forEach((item, index) => {
                            if (seq[index]) {
                                item.classList.remove('hide');
                            }
                            else {
                                item.classList.add('hide');
                            }
                        });
                        noteitem.forEach(item => {
                            if (item.classList.contains('active')) {
                                item.classList.remove('active');
                            }
                        });
                        list.classList.remove('sel')
                        break;
                }
                console.log(label);
            });
        });
    }

    newNote() {

        let noteList = document.querySelector('.note-list');
        let lPanel = document.querySelector('.left.panel');
        if (!rightPanel.isExist()) {
            rightPanel.insert(lPanel, insertPosition['ae']);
        }
        else {
            document.querySelector('input').value = "";
            document.querySelector('textarea').value = "";
        }
        let time = new Date().toLocaleString()
        let inputData = {
            time: time,
            id: `${hash(time)}`,
            title: "",
            body: "",
            status: "p"
        }


        noteItem.insert(noteList, insertPosition['ab'], inputData);
        noteList.querySelectorAll('.note-item').forEach(i => {
            i.classList.remove('active');
        });
        let item = noteList.querySelector('.note-item');
        item.classList.add('active');
        this.rightPanelEvent();
        this.itemEventReg();
        return;
    }

    rightPanelEvent() {

        document.querySelector('input').addEventListener('input', () => {
            this.updateNote()
        });
        document.querySelector('textarea').addEventListener('input', () => {
            this.updateNote()
        });
    }

    updateNote() {

        let item = document.querySelectorAll('.note-item');
        item.forEach(i => {
            if (i.classList.contains("active")) {

                let contentTitle = document.querySelector('input');
                let contentBody = document.querySelector('textarea');
                let span1 = i.querySelector('span:nth-child(1)');
                let span2 = i.querySelector('span:nth-child(2)');
                let span3 = i.querySelector('span:nth-child(3)');
                let time = new Date().toLocaleString();
                let Notes = {
                    "title": `${contentTitle.value}`,
                    "body": `${contentBody.value}`,
                    "update": `${time}`,
                    "status": `p`
                }
                span1.textContent = contentTitle.value;
                span2.textContent = contentBody.value;
                span3.textContent = time;
                note.saveNotes(`${i.dataset.id}`, Notes);

            }
        })
    }
    itemEventReg() {
        let notes = document.querySelectorAll('.note-item');

        for (let i of notes) {
            i.addEventListener('click', () => { this.click(i, notes) })
            i.addEventListener('dblclick', this.dblclick);
        }


    }
    click(data, items) {
        let list = document.querySelector('.note-list');
        if (!list.classList.contains('sel')) {
            
            for (let i of items) {
                i.classList.remove('active')
            }
            let lPanel = document.querySelector('.left.panel');
            if (!rightPanel.isExist()) {
                rightPanel.insert(lPanel, insertPosition['ae']);
            }
            this.rightPanelEvent();
            let contentTitle = document.querySelector('input');
            let contentBody = document.querySelector('textarea');
            let id = data.dataset.id;
            let Notes = JSON.parse(note.getNotes());
            contentTitle.value=Notes[id].title;
            contentBody.value=Notes[id].body;
            data.classList.add('active')

        }
        else {

            data.classList.add('active')
        }

    }
    dblclick() {

        let list = document.querySelector('.note-list');
        list.classList.add('sel');

        let row = document.querySelectorAll('.row');
        let seq;
        seq = [0, 1, 1, 0]
        row.forEach((item, index) => {

            if (seq[index]) {
                item.classList.remove('hide');
            }
            else {
                item.classList.add('hide');
            }
        });

    }


}