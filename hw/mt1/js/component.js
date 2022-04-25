import event from "./event.js";
export default class componenet {
    constructor() {

        this.panel = `
        <div class="left panel">
            <div class="control">
                <div class="row">
                    <button type="button" class="add btn">Add</button>
                    <button type="button" class="sel btn">Select</button>
                </div>
                <div class="row hide">
                    <button type="button" class="del btn">Delete</button>
                    <button type="button" class="com btn">Complete</button>
                </div>
                <div class="row hide">
                    <button type="button" class="cancel btn ">Cancel</button>
                </div>
                <div class="row">
                    <select>
                        <option>Processing</option>
                        <option>Complete</option>
                        <option>Delete</option>
                    </select>
                </div>
                <div>

                </div>
            </div>
            <span class="underline"></span>
            <div class="note-list">

            </div>

        </div>
        <div class="right panel">
            <input class="note-title" type="text" placeholder="Enter a title...">
            <textarea class="note-content" placeholder="I am the notes body..."></textarea>
        </div>

        `
        this.note=`
        <div class="note-item">
        <span>Title</span>
        <span>這是個測試內容Test
            這是個測試內容Test
        </span>
        <div></div>
    </div>
        `
    }
    initial(root= new HTMLElement()){
        root.innerHTML= this.panel;
        this.regEvent(root)
    }
    regEvent(root= new HTMLElement()){
        let eventVar = new event();
        let select = root.querySelector('select');
        eventVar.selectRegEvent(select);
        let control = root.querySelector('.control')
        eventVar.btnRegEvent(control)

    }
}