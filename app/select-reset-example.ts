import { Component, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'select-reset-example',
  templateUrl: 'select-reset-example.html',
  styleUrls: ['select-reset-example.css'],
})
export class SelectResetExample {

  // Array which contains all options groups and its values, will later loop through it to render groups and all items
  groups: any[] = [
    {
      name: 'ETHERNET',
      items: [
        {
          label: "640K",
          value: "BS640KB_ETHERNET",
          defaultValue: true
        },
        {
          label: "7MB",
          value: "BS7MB_ETHERNET",
          defaultValue: true
        },
        {
          label: "7MB NOQinQ",
          value: "BS7MB_ETHERNET_NOQinQ",
          defaultValue: true
        },
        {
          label: "20MB",
          value: "BS20MB_ETHERNET",
          defaultValue: true
        }
      ]
    },
    {
      name: 'ATM',
      items: [
        {
          label: "640K",
          value: "BS640K_ATM",
          defaultValue: true
        },
        {
          label: "7MB",
          value: "BS7M_ATM",
          defaultValue: true
        },
        {
          label: "20MB",
          value: "BS20M_ATM",
          defaultValue: true
        }
      ]
    },
    {
      name: 'ETH',
      items: [
        {
          label: "2MB",
          value: "BS2MB_SHDSL_ETH",
          defaultValue: true
        },
        {
          label: "4MB IMA",
          value: "BS4MB_SHDSL_ETH_IMA",
          defaultValue: true
        },
        {
          label: "6MB IMA",
          value: "BS6MB_SHDSL_ETH_IMA",
          defaultValue: true
        },
        {
          label: "8MB IMA",
          value: "BS8MB_SHDSL_ETH_IMA",
          defaultValue: true
        }
      ]
    },
    {
      name: 'SHDSL ATM',
      items: [
        {
          label: "2MB",
          value: "BS2MB_SHDSL",
          defaultValue: true
        },
        {
          label: "4MB B",
          value: "BS4MB_SHDSL_B",
          defaultValue: true
        },
        {
          label: "4MB IMA",
          value: "BS4MB_SHDSL_IMA",
          defaultValue: true
        },
        {
          label: "6MB IMA",
          value: "BS6MB_SHDSL_IMA",
          defaultValue: true
        },
        {
          label: "8MB IMA",
          value: "BS8MB_SHDSL_IMA",
          defaultValue: true
        }
      ]
    }
  ];


  modelGroup: any[]; // the selected values
  
  constructor() { }

  ngOnInit() {
  }

  selectAll(select: NgModel) {
    let values: any[] = []; // array which will contain all values

    // loop through all groups and add their items' values to the array
    for(let group of this.groups){
      for(let item of group.items){
        values.push(item.value);
      }
    }

    // submit the array with all values
    select.update.emit(values);
  }

  deselectAll(select: NgModel) {
    select.update.emit([]);
  }

  selectGroup(group, select: NgModel) {
    let values: any[] = []; 
    for(let item of group.items){
      values.push(item.value);
    }
    // if (group.items.length > 0) return values; 
    select.update.emit(values);
  }

  // On button click
  test() {
    console.log(this.modelGroup)
  }
}