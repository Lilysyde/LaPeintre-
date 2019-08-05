import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  contactForm : FormGroup = this.fb.group({
    nom:["",Validators.required],
    prenom:["",Validators.required],
    adresse:["",Validators.required],
    cp:["",Validators.required],
    ville:["",Validators.required],
    tel:["",Validators.required],
    mail:["",Validators.required],
    commentaire:["",Validators.required],
  })

  constructor(private fb:FormBuilder, private connect: ApiService) { }

  ngOnInit() {
  
}
onSubmit() {
  console.log(this.contactForm.value as  JSON)
  this.connect.postContact(this.contactForm.value).subscribe(res=>{
    console.log(res)
  })
}
}
