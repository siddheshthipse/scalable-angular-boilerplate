export class GetData {
    static readonly type = '[App] Get';
}

export class AddData{
    static readonly type='[App] Add';
    constructor(public payload:any){}
}

export class DeleteData {
    static readonly type = '[App] Delete';
    constructor(public id: number) { }
}