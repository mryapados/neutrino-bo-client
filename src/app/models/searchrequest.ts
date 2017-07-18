/**
 * 
 * 
 */

export class SearchRequest {
    expression: String;
    
    constructor(options: {
        expression?: String
    }){
        this.expression = options.expression ? options.expression : '';
    }

    get display(): String {
        if (!this.expression) return this.expression;
        else if (this.expression.indexOf(':') > -1) return this.expression;
        else return 'name:' + this.expression;
    }
    
}