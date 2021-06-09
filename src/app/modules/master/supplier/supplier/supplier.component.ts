import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings} from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  isLeadTimeSectionCollapsed = false;
  isItemPriceSectionCollapsed = false;
  isAddressContactSectionCollapsed = false;
  isMappingSectionCollapsed = false;
  basicInfoForm!: FormGroup;
  contactForm!: FormGroup;
  addressForm!: FormGroup;
  supplierMapping: Array<any> = [];
  supplier: any;
  dropdownList = [
    { item_id: 1, item_text: 'Knitting' },
    { item_id: 2, item_text: 'Dyeing' },
    { item_id: 3, item_text: 'Packing' },
    { item_id: 4, item_text: 'Fusing' },
    { item_id: 5, item_text: 'Piece Printing' },
    { item_id: 6, item_text: 'Compacting' },
    { item_id: 7, item_text: 'Checking' },
    { item_id: 8, item_text: 'Bleaching' },
    { item_id: 9, item_text: 'Steaming' },
    { item_id: 10, item_text: 'Cutting' },
    { item_id: 11, item_text: 'Stitching' },
    { item_id: 12, item_text: 'Dyeing' },
    { item_id: 13, item_text: 'Embroidry' },
    { item_id: 14, item_text: 'Washing' },
    { item_id: 15, item_text: 'Roll Printing' }
  ];
  selectedItems = [];
  dropdownSettings!: IDropdownSettings;
  address_list : any;
  contact_list: any;

  constructor(private modalService: NgbModal, public toast: ToastService, private fb: FormBuilder) {
    this.basicInfoForm = this.fb.group({
      supplier_name: ['', [Validators.required]],
      pan: ['', [Validators.required, Validators.minLength(10)]],
      department: ['', [Validators.required]]
    });

    this.contactForm = this.fb.group({
      full_name: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      email: ['', [Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone_number: ['', [Validators.required, Validators.minLength(10)]],
      send_sms_updates: ['', []],
      send_email_updates: ['', []],
    });

    this.addressForm = this.fb.group({
      address_title: ['', []],
      address_line_1: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', [Validators.required]],
      gstin: ['', [Validators.minLength(15)]],
      phone: ['', [Validators.minLength(10)]],
      email: ['', [Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      is_default_address: ['', []]
    });
   }
 
  
  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  openLg(content: any,  values: any, form_group: any) {
    this.contactForm.reset();
    this.addressForm.reset();
    if(form_group == 'contactForm')
    {
      this.contactForm.setValue(values);
    }
    if(form_group == 'addressForm')
    {
      this.addressForm.setValue(values);
    }
    this.modalService.open(content, { size: 'lg', scrollable: true});
  }
  addFieldValue() {
      this.supplierMapping.push(this.supplier)
      this.supplier = '';
  }

  deleteFieldValue(index: number) {
      this.supplierMapping.splice(index, 1);
  }
  
  submitContactForm(){
    if (this.modalService) {
      if (!this.contact_list){
        this.contact_list = []
      }
      this.contact_list.push(this.contactForm.value)
      this.modalService.dismissAll();
      this.contactForm.reset();
    }
  }

  submitAddressForm(){
    if (this.modalService) {
      if (!this.address_list){
        this.address_list = []
      }
      this.address_list.push(this.addressForm.value)
      this.modalService.dismissAll();
      this.addressForm.reset();
    }
  }
  create_supplier(){
    if (this.basicInfoForm.invalid) {
      this.toast.showDanger('Please enter required basic information');
      return;
    }
    console.log(this.basicInfoForm.value)
  }
}
