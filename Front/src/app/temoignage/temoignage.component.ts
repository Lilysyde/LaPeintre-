import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageComponent implements OnInit {

  temoignages;


  temoignageForm : FormGroup = this.fb.group({
    nom:["",Validators.required],
    commentaire:["",Validators.required],
  })

  constructor(private fb:FormBuilder, private connect: ApiService) { }

  ngOnInit() {
    this.connect.getTemoignage().subscribe(res=>{
      this.temoignages=res ;
      console.log(res)
 
    })
}
onSubmit() {
  console.log(this.temoignageForm.value as  JSON)
  this.connect.postTemoignage(this.temoignageForm.value).subscribe(res=>{
    console.log(res)
  })
}
}
