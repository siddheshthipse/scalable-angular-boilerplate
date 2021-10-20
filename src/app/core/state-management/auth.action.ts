export class Login {
  static readonly type = '[Login] Auth';
  constructor(public payload: { email: string, password:string }) {}
}

export class Logout {
  static readonly type = '[Logout] Auth';
}

export class Register{
  static readonly type='[Register] Auth';
  constructor(public payload:any){};
}

export class GetCookie{
  static readonly type='[GetCookie] Auth';
}

export class EnsureAuthenticated{
  static readonly type='[EnsureAuth] Auth';
}
