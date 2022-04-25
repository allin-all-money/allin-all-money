export default class event {
    constructor(){
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
                let note = document.querySelectorAll('.note-item');
                let seq ;
                
                switch (label) {
                    case "Add":
                        this.addNote()
                        break;
                    case "Select":
                        seq = [0,1,1,0]
                        row.forEach((item,index)=>{
                            if(seq[index]){
                                item.classList.remove('hide');
                            }
                            else{
                                item.classList.add('hide');
                            }
                        });
                        break;
                    case "Delete":
                        deleteNote()
                        break;
                    case "Complete":
                        completeNote()
                        break;
                    case "Cancel":
                        seq = [1,0,0,1]
                        row.forEach((item,index)=>{
                            if(seq[index]){
                                item.classList.remove('hide');
                            }
                            else{
                                item.classList.add('hide');
                            }
                        });
                        note.forEach(item=>{
                            if(item.classList.contains('check')){
                                item.classList.remove('check')
                            }
                        });
                        break;
                }
                console.log(label);
            });
        });
    }
    addNote(){

    }
    completeNote(){

    }
    deleteNote(){

    }

}