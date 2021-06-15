import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { ToastService } from 'src/app/core/services/toast/toast.service';

const items = [ 'Test Item 1',
				'Test Item 2',
				'Test Item 3',
				'Test Item 4',
				'Test Item 5',
				'Test Item 6'];
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  poDetailsForm!: FormGroup;
  itemCommentForm!: FormGroup;
  itemDetailsSectionCollapsed = false;
  rowCollapsed = false;
  commentForm!: FormGroup;
  lotDropdownSettings!: IDropdownSettings;
  selectedLot = [];
  lot_list = [
    { lot_id: 1, lot_text: 'LOT-0001' },
    { lot_id: 2, lot_text: 'LOT-0002' },
    { lot_id: 3, lot_text: 'LOT-0003' },
    { lot_id: 4, lot_text: 'LOT-0004' },
    { lot_id: 5, lot_text: 'LOT-0005' }
  ];
  itemTableMapping: Array<any> = [];
  selectedItemRow: any = {};
  lotTableMapping: Array<any> = [];
  selectedLotRow: any = {};
  deliveryTableMapping: Array<any> = [];
  selectedDeliveryRow: any = {};

  constructor(private fb: FormBuilder, public toast: ToastService) {
    this.poDetailsForm = this.fb.group({
      series: ['', [Validators.required]],
      po_date: ['', [Validators.required]],
      supplier: ['', [Validators.required]],
      supplier_address: ['', []],
      lot: ['', [Validators.required]],
      delivery_location: ['', []]
    });
    this.commentForm = this.fb.group({
      comment: ['', []]
    });
   }

  ngOnInit(): void {
    this.lotDropdownSettings = {
      singleSelection: false,
      idField: 'lot_id',
      textField: 'lot_text',
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
  addItemTableRow() {
    this.itemTableMapping.push(this.selectedItemRow)
    this.selectedItemRow = {};
  }
  addLotTableRow() {
    this.lotTableMapping.push(this.selectedLotRow)
    this.selectedLotRow = {};
  }
  addDeliveryTableRow() {
    this.deliveryTableMapping.push(this.selectedDeliveryRow)
    this.selectedDeliveryRow = {};
  }
  deleteItemTableRow(index: number) {
    this.itemTableMapping.splice(index, 1);
  }
  deleteLotTableRow(index: number) {
    this.lotTableMapping.splice(index, 1);
  }
  deleteDeliveryTableRow(index: number) {
    this.deliveryTableMapping.splice(index, 1);
  }
  submitPo(){
    if (this.poDetailsForm.invalid) {
      this.toast.showDanger('Please enter required details');
      return;
    }
  }
  on_supplier_selection(e: any){
    this.poDetailsForm.controls['supplier_address'].setValue('123, Test Address');
  }
}