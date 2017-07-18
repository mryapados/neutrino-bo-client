/**
 *
 *
 */

export class PageRequest {
    page: number ;
    size: number ;
    sortField: String;
    sortType: String;

    constructor(options: {
        page?: number,
        size?: number,
        sortField?: String,
        sortType?: String
    }) {
        this.page = options.page ? options.page : 0;
        this.size = options.size ? options.size : 10;
        this.sortField = options.sortField ? options.sortField : 'dateAdded';
        this.sortType = options.sortType ? options.sortField : 'ASC';
    }

    get display(): String {
        const page = 'page=' + this.page;
        const size = 'size=' + this.size;
        const sort = 'sort=' + this.sortField + ',' + this.sortType;

        return page + '&' + size + '&' + sort;
    }

}
