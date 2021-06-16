import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { ToastService } from 'src/app/core/services/toast/toast.service';

const items = ['Test Item 1',
			'Test Item 2',
			'Test Item 3',
			'Test Item 4',
			'Test Item 5',
			'Test Item 6'];
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemDetailsForm!: FormGroup;
  rowCollapsed = true;
  bomDetailsSectionCollapsed = false;
  itemAttrDetailsSectionCollapsed = false;
  uomSectionCollapsed = false;
  disableAttribute = true;
  itemAttributeDetails: Array<any> = [];
  selectedItemAttributeRow: any = {};
  uomDetails: Array<any> = [];
  selectedUomRow: any = {};
  bomDetails: Array<any> = [];
  selectedBomRow: any = {};
  attributeMappings: Array<any> = [];
  selectedAttrMappingRow: any = {};
  category_list = [
    { category_id: 1, category_text: 'Raw Material' },
    { category_id: 2, category_text: 'Products' },
    { category_id: 3, category_text: 'Sub Assemblies' },
    { category_id: 4, category_text: 'Consumable' },
    { category_id: 5, category_text: 'Services' }
  ];
  uom_list = [
    { uom_id: 1, uom_text: 'Nos' },
    { uom_id: 2, uom_text: 'Box' },
    { uom_id: 3, uom_text: 'Meter' },
    { uom_id: 4, uom_text: 'Unit' },
    { uom_id: 5, uom_text: 'Set' }
  ];
  attribute_list = [
    { attr_id: 1, attr_text: 'Size' },
    { attr_id: 2, attr_text: 'Colour' },
    { attr_id: 3, attr_text: 'Part' },
    { attr_id: 4, attr_text: 'Dia' }
  ];
  attribute_value_list = [
    { attr_val_id: 1, attr_val_text: 'S' },
    { attr_val_id: 2, attr_val_text: 'M' },
    { attr_val_id: 3, attr_val_text: 'L' },
    { attr_val_id: 4, attr_val_text: 'XL' }
  ];
  categoryDropdownSettings!: IDropdownSettings;
  selectedCategory = [];
  uomDropdownSettings!: IDropdownSettings;
  selectedUom = [];
  attributeDropdownSettings!: IDropdownSettings;
  selectedAttribute = [];
  attributeValueDropdownSettings!: IDropdownSettings;
  selected_attr = ''
  selected_attr_value = []

  constructor(private fb: FormBuilder, public toast: ToastService) {
    this.itemDetailsForm = this.fb.group({
      item_name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      hsn_code: ['', []],
      disabled: ['', []],
      default_uom: ['', [Validators.required]],
      default_attribute: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.categoryDropdownSettings = {
      singleSelection: false,
      idField: 'category_id',
      textField: 'category_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.uomDropdownSettings = {
      singleSelection: false,
      idField: 'uom_id',
      textField: 'uom_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.attributeDropdownSettings = {
      singleSelection: false,
      idField: 'attr_id',
      textField: 'attr_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.attributeValueDropdownSettings = {
      singleSelection: false,
      idField: 'attr_val_id',
      textField: 'attr_val_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  @ViewChild('instance', { static: true })
  instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? items
        : items.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
  on_attribute_selection(e: any){
    this.disableAttribute = false
    if(e.target.value == 'Size'){
      this.attribute_value_list = [
      { attr_val_id: 1, attr_val_text: 'S' },
      { attr_val_id: 2, attr_val_text: 'M' },
      { attr_val_id: 3, attr_val_text: 'L' },
      { attr_val_id: 4, attr_val_text: 'XL' }
    ];
  }
  if(e.target.value == 'Colour'){
    this.attribute_value_list = [
    { attr_val_id: 1, attr_val_text: 'Red' },
    { attr_val_id: 2, attr_val_text: 'Green' },
    { attr_val_id: 3, attr_val_text: 'Blue' },
    { attr_val_id: 4, attr_val_text: 'White' }
  ];
  }
  }
  addAttributeDetails() {
    this.itemAttributeDetails.push(this.selectedItemAttributeRow)
    this.selectedItemAttributeRow = {};
  }
  deleteAttributeDetails(index: number) {
    this.itemAttributeDetails.splice(index, 1);
  }
  addUomDetails() {
    this.uomDetails.push(this.selectedUomRow)
    this.selectedUomRow = {};
  }
  deleteUomDetails(index: number) {
    this.uomDetails.splice(index, 1);
  }
  addBomDetails() {
    this.selectedBomRow['expanded'] = false
    this.bomDetails.push(this.selectedBomRow)
    this.selectedBomRow = {};
  }
  deleteBomDetails(index: number) {
    this.bomDetails.splice(index, 1);
  }
  addAttributeMapping() {
    this.attributeMappings.push(this.selectedAttrMappingRow)
    this.selectedAttrMappingRow = {};
  }
  deleteAttributeMapping(index: number) {
    this.attributeMappings.splice(index, 1);
  }
  saveItem(){
    if (this.itemDetailsForm.invalid) {
      this.toast.showDanger('Please enter required details');
      return;
    }
  }
}