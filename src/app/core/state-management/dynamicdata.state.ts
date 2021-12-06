import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import {
  GetFormSchema,
  GetTableColumns,
  GetTableData,
} from './dynamicdata.action';

export interface DynamicDataStateModel {
  tableColumns: any | null;
  tableData: any | null;
  formSchema: any | null;
}

@State<DynamicDataStateModel>({
  name: 'dynamicdatastate',
  defaults: {
    tableColumns: null,
    tableData: null,
    formSchema: null,
  },
})
@Injectable()
export class DynamicDataState {
  constructor(private http: HttpService) {}

  @Action(GetTableColumns)
  loadTableColumns(ctx: StateContext<DynamicDataStateModel>) {
    return this.http.getDynamicTableColumns().pipe(
      tap((returnData) => {
        console.log('Inside Table Columns');
        console.log(returnData);
        const state = ctx.getState();

        ctx.setState({
          ...state,
          tableColumns: returnData,
        });
      })
    );
  }

  @Action(GetTableData)
  loadTableData(ctx: StateContext<DynamicDataStateModel>) {
    return this.http.getDynamicTableData().pipe(
      tap((returnData) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          tableData: returnData,
        });
      })
    );
  }

  @Action(GetFormSchema)
  loadFormSchema(ctx: StateContext<DynamicDataStateModel>) {
    return this.http.getFormSchema().pipe(
      tap((returnData) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          formSchema: returnData,
        });
      })
    );
  }
}
