export class Login {
  static readonly type = '[Login] Auth';
  constructor(public payload: { email: any, token:any }) {}
}

export class Logout {
  static readonly type = '[Logout] Auth';
}
