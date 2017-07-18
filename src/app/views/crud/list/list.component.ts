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

  constructor() { }

  ngOnInit() {
    this.label = new Label({classCss: 'label-primary', pullRight: true});
    this.tool = new Tool({collapseBtn: false, closeBtn: false});





    this.pageRequest = new PageRequest({page:4});

    this.getDatas();
  }

  getDatas(): void{
    console.log('getDatas()');
    this.label.label = '51 - 100 of 396'; 

    
    this.fields = ['id', 'name', 'dateAdded', 'dateUpdated', 'description', 'lang', 'controller', 'metaDescription', 'metaTitle', 'metaKeyWords']
    this.totalPages = 45;
    this.pageBtns = this.mkPageBtns(this.pageRequest.page, this.totalPages);
    this.searchRequest = new SearchRequest({expression:'bonjour'});
  }



  private mkPageBtns(currentPage: number, totalPages: number): String[]{
    const maxPageBtns: number = 4;
    let count = maxPageBtns;

    let btns: Set<number> = new Set();

    btns.add(0);
    btns.add(currentPage);
    btns.add(totalPages);

		let p: number = 0;
		let sens: number = -1;
		if (currentPage >= totalPages / 2){
			sens = 1;
		}
		for (let m: number = 0; m <= maxPageBtns; m++){
			for (let i: number = 0; i <= 1; i++){
				if (count == 0) break;
				p = currentPage + (m * sens);
				if (p < totalPages && p > 0){
					count--;
					btns.add(p);
				}
				sens = -sens;
			}
		}

    let btnsOrdered: number[] = Array.from(btns);
    btnsOrdered = btnsOrdered.sort(
      (a: number , b: number) => {return a - b}
    );

    let pageBtns: any[] = [];
    for (let i: number = 0; i <= btnsOrdered.length - 1; i++){
      const a = btnsOrdered[i];
      const b = btnsOrdered[i + 1];
      pageBtns.push(a);
      if (b - a > 1) pageBtns.push('...');
    }
    
    return pageBtns;
  }










}
