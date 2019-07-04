import { Component, OnInit } from '@angular/core';
import { DataBdService } from "../../services/data-bd.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  emailPattern: any = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$";
  createFormGroup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    })
  }

  contactForm: FormGroup;

  constructor( private dbData: DataBdService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('No es valido');
    }
  }

  get name() {return this.contactForm.get('name');}
  get email() {return this.contactForm.get('email');}
  get message() {return this.contactForm.get('message');}

}
