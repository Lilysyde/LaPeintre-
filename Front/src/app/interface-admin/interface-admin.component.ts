import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.scss']
})
export class InterfaceAdminComponent implements OnInit {
  contacts;

  constructor(private connect: ApiService) { }

  ngOnInit() {
    this.connect.getContact().subscribe(res=>{
      this.contacts=res ;
      console.log(res)
 
    })
  }
  deleteContact(id: number){
    this.connect.deleteContact(id).subscribe( res=>{
      console.log(res)
      console.log('deleted')
    });
  }
}
