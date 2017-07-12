/**
 * 
 * 
 */

export class Tool {
    collapseBtn: Boolean;
    closeBtn: Boolean;
    
    constructor(options: {
        collapseBtn?: Boolean,
        closeBtn?: Boolean
    }){
        this.collapseBtn = options.collapseBtn;
        this.closeBtn = options.closeBtn;
    }

    get display(): Boolean {
        return this.collapseBtn || this.closeBtn;
    }
    
}