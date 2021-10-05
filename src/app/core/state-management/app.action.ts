export class GetData {
    static readonly type = '[App] Get';
}

export class DeleteData {
    static readonly type = '[App] Delete';
    constructor(public id: number) { }
}