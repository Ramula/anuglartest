import { Component } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subScriptionForm: any;
  onlyCharsPattern= '[a-zA-Z ]*'
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.subScriptionForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.pattern(this.onlyCharsPattern)]],
        surName: [null, [Validators.required, Validators.pattern(this.onlyCharsPattern)]]
    });
  }

  get firstName(){
    return this.subScriptionForm.get('name');
  }

  get surName(){
    return this.subScriptionForm.get('surName');
  }

}

export class SubsctiptinForm {
  name: string;
  surName: string;
  gender: string;
  emailAddress: string;
  confirmEmailAddress: string;
  country: string;
  dob: string;
  companyName: string;
  industry: string;
  aboutYou: string;
  newsLetterOptIn: boolean;
  pricacyOptIn: boolean;
  termsAndConditions: boolean;
}
