import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { DeleteData, GetData } from './app.action';

export class AppStateModel {
  data: any;
}

@State<AppStateModel>({
  name: 'appstate',
  defaults: {
    data: [],
  },
})
@Injectable()
export class AppState {
  constructor(private hs: HttpService) {}

  @Selector()
  static getStateData(state: AppStateModel): any {
    return state.data;
  }

  @Action(GetData)
  insertDataIntoState(ctx: StateContext<AppStateModel>, {}: GetData) {
    return this.hs.getData().pipe(
      tap((returnData) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          data: returnData,
        });
      })
    );
  }

  @Action(DeleteData)
    deleteDataFromState(ctx: StateContext<AppStateModel>, { id }: DeleteData) {
        return this.hs.deleteData(id).pipe(tap(returnData => {
            const state=ctx.getState();
            console.log("The is is",id)
            //Here we will create a new Array called filteredArray which won't contain the given id and set it equal to state.todo
            const filteredArray=state.data.filter((contents: { id: number; })=>contents.id!==id);

            ctx.setState({
                ...state,
                data:filteredArray
            })
        }))
    }
}
