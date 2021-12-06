import { Component, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { SFButton, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { HttpService } from 'src/app/core/services/http.service';
import { DashboardFascade } from '../../dashboard.fascade';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  tableColumns:STColumn[] | any | null;
  tableData: any | null;
  formSchema:SFSchema | any | null;

  flag1:boolean=false;
  flag2:boolean=false;
  flag3:boolean=false;
  constructor(private dfascade:DashboardFascade, private httpservice:HttpService) { }

  async ngOnInit(): Promise<void> {
    console.log('Tasks Component');

    // const something3:any = await this.dfascade.getFormSchema().toPromise();
    // console.log(something3.dynamicdatastate.formSchema);
    // this.formSchema=something3.dynamicdatastate.formSchema;
    // console.log('This is NOT working');
    // console.log(this.formSchema);
    // if(this.formSchema!=null){
    //   this.flag3=true;
    // }
    // console.log(`Flag3 ${this.flag3}`);

    this.httpservice.getFormSchema().subscribe((returnData)=>{
      this.formSchema=returnData;
      console.log('This is working');
      console.log(this.formSchema)
      this.flag3=true;
    })

    const something1:any = await this.dfascade.getTableColumns().toPromise();
    console.log(something1.dynamicdatastate.tableColumns);
    this.tableColumns=something1.dynamicdatastate.tableColumns;
    if(this.tableColumns!=null){
      this.flag1=true;
    }
    console.log(`Flag1 ${this.flag1}`);

    const something2:any = await this.dfascade.getTableData().toPromise();
    console.log(something2.dynamicdatastate.tableData);
    this.tableData=something2.dynamicdatastate.tableData;
    if(this.tableData!=null){
      this.flag2=true;
    }
    console.log(`Flag2 ${this.flag2}`);
  }

  //For Table
  pageSize:number=3;

  formButton:SFButton={
    submit:'Create',
    edit:undefined,
    reset:undefined
  }

  onFormSubmit(formData:any){
    console.log(formData);
  }
  //For Drawer
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
