import note from './Note.js';
import view from './View.js';


export default class control{
    constructor(root=new HTMLElement()){
        this.root = root;
        this.notes=[]
        this.view = new view(root)
        this.initial(root);
    }

}