import { CrudService } from './../crud.service';
import { Tool } from './../../../models/tool';
import { SearchRequest } from './../../../models/searchrequest';
import { PageRequest } from './../../../models/pagerequest';
import { Label } from './../../../models/label';
import {  } from './../../../models/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  label: Label;
  tool: Tool;

  totalPages: number;
  pageBtns: any[];
  pageRequest: PageRequest;
  fields: String[];

  searchRequest: SearchRequest;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.label = new Label({classCss: 'label-primary', pullRight: true});
    this.tool = new Tool({collapseBtn: false, closeBtn: false});


    


    this.pageRequest = new PageRequest({});
    this.searchRequest = new SearchRequest({});
    this.getDatas();
  }

  getDatas(): void {
    console.log('getDatas(\'' + this.pageRequest.display + '\',\'' + this.searchRequest.display + '\')');
    this.crudService.loadPage('Skill', this.pageRequest, this.searchRequest).subscribe(
      page => {
        console.log(page);

        this.totalPages = page.totalPages;

        this.pageRequest.page = page.number;
        this.pageRequest.size = page.size;
        this.pageRequest.sortField = page.sort[0].property;
        this.pageRequest.sortType = page.sort[0].direction;

        this.pageBtns = this.mkPageBtns(this.pageRequest.page, this.totalPages);

        const begin = page.number * page.size;
        const end = begin + page.numberOfElements;
        this.label.label = begin + ' - ' + end + ' of ' + page.totalElements;
      }
    );


    


    this.fields = ['id', 'name', 'dateAdded', 'dateUpdated', 'description', 'lang', 'controller', 'metaDescription', 'metaTitle', 'metaKeyWords']

    
    
  }



  private mkPageBtns(currentPage: number, totalPages: number): String[] {
    const maxPageBtns = 4;
    let count = maxPageBtns;

    let btns: Set<number> = new Set();

    btns.add(0);
    btns.add(currentPage);
    btns.add(totalPages - 1);

    let p = 0;
    let sens: number = -1;
    if (currentPage >= (totalPages / 2) - 1) {
    	sens = 1;
    }
    for (let m = 0; m <= maxPageBtns; m++) {
    	for (let i = 0; i <= 1; i++) {
    		if (count === 0) {
          break;
        }
    		p = currentPage + (m * sens);
    		if (p < totalPages - 1 && p > 0) {
    			count--;
    			btns.add(p);
    		}
    		sens = -sens;
    	}
    }

    let btnsOrdered: number[] = Array.from(btns);
    btnsOrdered = btnsOrdered.sort(
      (a: number , b: number) => a - b
    );

    const pageBtns: any[] = [];
    for (let i = 0; i <= btnsOrdered.length - 1; i++) {
      const a = btnsOrdered[i];
      const b = btnsOrdered[i + 1];
      pageBtns.push(a);
      if (b - a > 1) {pageBtns.push('...')};
    }

    return pageBtns;
  }










}
