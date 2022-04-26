import componenet from "../Component.js";
import event from "../Event.js";
export default class leftPanel extends componenet{
    constructor(){
        super();
        
    }
    static bodyContent(){
        return(`
        <div class="left panel"><div class="control"><div class="row"><button type="button" class="add btn">New</button></div><div class="row hide"><button type="button" class="del btn">Delete</button> <button type="button" class="com btn">Complete</button></div><div class="row hide"><button type="button" class="cancel btn">Cancel</button></div><div class="row"><select><option>All</option><option>Processing</option><option>Complete</option><option>Delete</option></select></div><div></div></div><span class="underline"></span><div class="note-list"></div></div>
        `)
    }

}
/*
         <div class="left panel">
            <div class="control">

                <div class="row">
                    <button type="button" class="add btn">New</button>
                </div>

                <div class="row hide">
                    <button type="button" class="del btn">Delete</button>
                    <button type="button" class="com btn">Complete</button>
                </div>

                <div class="row hide">
                    <button type="button" class="cancel btn">Cancel</button>
                </div>
                
                <div class="row">
                    <select>
                        <option>Processing</option>
                        <option>Complete</option>
                        <option>Delete</option>
                    </select>
                </div>
                <div></div>
            </div><span class="underline"></span>
            <div class="note-list"></div>
        </div>
*/