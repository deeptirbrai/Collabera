import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ENTER, SPACE, TAB } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatRadioChange } from '@angular/material';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-resumedit',
  templateUrl: './resumedit.component.html',
  styleUrls: ['./resumedit.component.css']
})
export class ResumeditComponent implements OnInit {
  model: NgbDateStruct;
  isSticky: boolean = false;
  disabled: boolean = true;
  current = -1;
  step = 0;
  selectedIndex: any;
  list: any;
  selected: any;
  selectable = true;
  removable = true;
  addOnBlur = true;
  canViewDiv: boolean = true;
  separatorKeysCodes = [ENTER, SPACE, TAB];
  @ViewChild('reContainer') reContainer: ElementRef
  data: any = [
    { label: "First Name", value: "John", class: 'w-33' },
    { label: "Middle Name", value: "-", class: 'w-33' },
    { label: "Last Name", value: "Bravo", class: 'w-33' },
    { label: "Father’s Name", value: "Steave", class: 'w-33' },
    { label: "Mother’s Name", value: "Maria", class: 'w-33' },
    { label: "Emergency Contact Person", value: "-", class: 'w-50' },
    { label: "Emergency Contact Number", value: "-", class: 'w-50' },
    { label: "Address 1", value: "2257  Bluff Street", class: 'w-100' },
    { label: "Address 2", value: "-", class: 'w-100' },
    { label: "City", value: "Milestown", class: 'w-33' },
    { label: "State", value: "Maryland", class: 'w-33' },
    { label: "Zip Code", value: "20650", class: 'w-33' },
    { label: "Home Number", value: "301-769-9361", class: 'w-33' },
    { label: "Mobile Number", value: "301-529-3720", class: 'w-33' },
    { label: "Work Number", value: "-", class: 'w-33' },
  ];

  listitems: any = [{ title: 'Personal Details', isActive: true },
  { title: 'Professional Details', isActive: false },
  { title: 'Education Details', isActive: false },
  { title: 'Key Skills', isActive: false },
  { title: 'Interested Jobs', isActive: false }];

  skills: any = [];
  company: any = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.skills.push({ name: value });
    }
    if (event.input) {
      event.input.value = '';
    }
  }

  remove(skill: Skills): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  addcomp(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.company.push({ name: value });
    }
    if (event.input) {
      event.input.value = '';
    }
  }

  removecomp(comp: Skills): void {
    const index = this.company.indexOf(comp);

    if (index >= 0) {
      this.company.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.reContainer.nativeElement.className = 'disabled'
  }

  @HostListener('window:scroll', [])

  checkScroll() {
    this.isSticky = window.pageYOffset >= 40;
  }

  setStep(index: number) {
    this.step = index;
  }



  toggleEdit(): void {
    this.disabled = false;
    this.reContainer.nativeElement.className = ''
  }

  tablist(index: number) {
    this.listitems[index].isActive = true;
    this.step++;
  }
  togglenoEdit(): void {
    this.disabled = true
    this.reContainer.nativeElement.className = 'disabled'
  }

  onRadioChange(event: MatRadioChange) {
    if (event.value === 'Working') {
      this.canViewDiv = true;
    } else {
      this.canViewDiv = false;
    }
  }

}
