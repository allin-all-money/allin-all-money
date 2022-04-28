import note from "./Note.js";
import noteItem from "./component/noteItem.js";
import rightPanel from "./component/rightPanel.js";

export default class event {
    constructor() {
        this.stateBar = ""

    }

    selectRegEvent(select = new HTMLElement()) {
        this.stateBar = select.value
        select.addEventListener('change', () => {
            this.stateBar = select.value
            switch (this.stateBar) {
                case noteStatus[0]:
                    this.processing()
                    break;
                case noteStatus[1]:

                    break;
                case noteStatus[2]:

                    break;
                default:

                    break;
            }
            console.log(this.stateBar)
        });
    }
    processing() {

    }
    btnRegEvent(control = new HTMLElement()) {
        let btn = control.querySelectorAll('.btn');

        btn.forEach(i => {
            let label = i.textContent;
            i.addEventListener('click', (e) => {

                let row = control.querySelectorAll('.row');
                let noteitem = document.querySelectorAll('.note-item');
                let list = document.querySelector('.note-list');
                let seq;

                switch (label) {
                    case "New":
                        this.newNote(control)
                        break;
                    case "Delete":
                        this.deleteNote();
                        break;
                    case "Complete":
                        this.completeNote();
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
                //console.log(label);
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
        let date = new Date();


        let inputData = {
            update: `${date.toLocaleString()}`,
            id: `${date.getTime()}`,
            title: "",
            body: "",
            status: noteStatus[0]
        }

        let tmp = {
            update: inputData.update,
            title: inputData.title,
            body: inputData.body,
            status: inputData.status,
        }


        noteItem.insert(noteList, insertPosition['ab'], inputData);
        noteList.querySelectorAll('.note-item').forEach(i => {
            i.classList.remove('active');
        });
        let item = noteList.querySelector('.note-item');
        item.classList.add('active');
        item = noteList.querySelectorAll('.note-item');
        note.saveNotes(inputData.id, tmp)
        this.rightPanelEvent();
        document.querySelector('input').focus()
        this.itemEventReg();
        return;
    }

    rightPanelEvent() {

        document.querySelector('input').addEventListener('input', this.updateNote);
        document.querySelector('textarea').addEventListener('input', this.updateNote);
    }

    updateNote() {

        let item = document.querySelectorAll('.note-item');
        item.forEach(i => {
            if (i.classList.contains("active")) {

                let contentTitle = document.querySelector('input');
                let contentBody = document.querySelector('textarea');
                let span1 = i.querySelector('span:nth-child(1)');
                let span2 = i.querySelector('span:nth-child(2)');
                let span3 = i.querySelector('span:nth-child(4)');
                let time = new Date().toLocaleString();
                let Notes = {
                    "id": `${i.dataset.id}`,
                    "title": `${contentTitle.value}`,
                    "body": `${contentBody.value}`,
                    "update": `${time}`,
                    "status": noteStatus[0]
                }
                if (contentTitle.value == "") {

                 
                    span1.textContent = "Title"
                }
                else {
           
                    span1.textContent = contentTitle.value;
                }
                span2.textContent = contentBody.value;
                span3.textContent = time;
                note.saveNotes(`${i.dataset.id}`, Notes);

            }
        })
    }
    itemEventReg() {
        let notes = document.querySelectorAll('.note-item');


        for (let i of notes) {

            i.addEventListener('click', this.click);
            i.data = i;

            i.addEventListener('dblclick', this.dblclick);
        }

    }

    click(data) {
        data = data.currentTarget.data
        let items = document.querySelectorAll('.note-item');
        let list = document.querySelector('.note-list');
        if (!list.classList.contains('sel')) {

            for (let i of items) {
                i.classList.remove('active')
            }
            let lPanel = document.querySelector('.left.panel');
            if (!rightPanel.isExist()) {
                rightPanel.insert(lPanel, insertPosition['ae']);
            }
            new event().rightPanelEvent()
            let contentTitle = document.querySelector('input');
            let contentBody = document.querySelector('textarea');
            let id = data.dataset.id;
            let Notes = JSON.parse(note.getNotes());
            contentTitle.focus();
            contentTitle.value = Notes[id].title ?? "";
            contentBody.value = Notes[id].body ?? "";
            data.classList.add('active')

        }
        else {
            list = document.querySelector('.note-list');

            if (data.classList.contains('active')) {

                data.classList.remove('active');
            }
            else {

                data.classList.add('active')
            }
        }

    }
    dblclick() {

        let list = document.querySelector('.note-list');
        list.classList.add('sel');
        rightPanel.remove();
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
    deleteNote() {
        let del = document.querySelectorAll('.note-item.active');
        let Notes = JSON.parse(note.getNotes());
        console.log("before", Notes)
        for (let i of del) {
            let id = i.dataset.id;
            if (Notes[id].status.includes(noteStatus[2])) {
                Notes[id].status = String(Notes[id].status).replace(`,${noteStatus[2]}`, "")
            }
            else {
                Notes[id].status += `,${noteStatus[2]}`;
            }

            note.saveNotes(`${id}`, Notes[id]);
        }

        console.log("after", Notes)
        console.log("-------------")


        let row = document.querySelectorAll('.row');
        let noteitem = document.querySelectorAll('.note-item');
        let list = document.querySelector('.note-list');
        let seq;
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
        list.classList.remove('sel');

        list.innerHTML = "";
        Notes = JSON.parse(note.getNotes());
        for (let i in Notes) {

            let tmp = {
                update: Notes[i].update,
                id: i,
                title: Notes[i].title,
                body: Notes[i].body,
                status: Notes[i].status
            }

            noteItem.insert(list, insertPosition['ab'], tmp)

        }
        this.itemEventReg();
        
    }


}