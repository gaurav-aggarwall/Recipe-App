import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private database: DatabaseService) { }

  ngOnInit(){
    this.onFetchData();
  }

  onSaveData(){
    this.database.save().subscribe( (response: Response) => {
      console.log(response);
    });
  }
  
  onFetchData(){
    this.database.fetch();
  }

}
