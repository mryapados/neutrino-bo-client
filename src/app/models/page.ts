/**
 *
 *
 */

export class Page {
    content: any[];
    last: Boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: any[];
    numberOfElements: number;
    first: Boolean;

    constructor(options: {
        content?: any[],
        last?: Boolean,
        totalPages?: number,
        totalElements?: number,
        size?: number,
        number?: number,
        sort?: any[],
        numberOfElements?: number,
        first?: Boolean,
    }) {
        this.content = options.content;
        this.last = options.last;
        this.totalPages = options.totalPages;
        this.totalElements = options.totalElements;
        this.size = options.size;
        this.number = options.number;
        this.sort = options.sort;
        this.numberOfElements = options.numberOfElements;
        this.first = options.first;
    }

}
