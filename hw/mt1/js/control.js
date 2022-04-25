import note from './note.js';
import view from './view.js';

export default class control{
    constructor(root=new HTMLElement()){
        this.notes=[]
        this.view = new view(root)
        this.initial(root);
    }
    initial(){
        this.view.initial();
    }
}