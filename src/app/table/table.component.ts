import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  composition: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { composition :2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  { composition: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  { composition: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  { composition: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
   {composition: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {composition: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {composition: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {composition: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {composition: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {composition: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {
  displayedColumns: string[] = ['composition', 'name', 'weight', 'symbol' ];
  dataSource = ELEMENT_DATA;
}
