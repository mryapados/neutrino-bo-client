/**
 * 
 * 
 */

export class Label {
    label: String;
    classCss: String;
    pullRight: Boolean;
    
    constructor(options: {
        label: String,
        classCss?: String,
        pullRight?: Boolean
    }){
        this.label = options.label;
        this.classCss = options.classCss;
        this.pullRight = options.pullRight;
    }
    
}