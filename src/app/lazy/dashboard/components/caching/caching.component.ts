import { Component, OnInit } from '@angular/core';
import { DashboardFascade } from '../../dashboard.fascade';

@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.html',
  styleUrls: ['./caching.component.css']
})
export class CachingComponent implements OnInit {
  tableData:any;

  constructor(private dfascade:DashboardFascade) { }

  ngOnInit(): void {
    this.dfascade.insert().subscribe((res:any)=>{
      this.tableData=res.appstate.data
      console.log(this.tableData)
    });
  }

  updateTable(){
    const newUser={
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    }
    this.dfascade.update(newUser).subscribe((res)=>{
      this.tableData=res.appstate.data;
    });
  }

  deleteTableData(){
    this.dfascade.delete(2).subscribe((res)=>{
      this.tableData=res.appstate.data;
    });
  }
}
