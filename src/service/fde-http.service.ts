import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, timeout } from "rxjs";
import { IResponse } from "../model/response.interface";

@Injectable()
export class FDEHttpService{
  constructor(private readonly _client:HttpClient){}
  rootUrl: string = "https://hm15blhzgb.execute-api.eu-west-1.amazonaws.com/Development/getLatest";

  public getLatestImage():Observable<IResponse|string>{
    return this._client.post<IResponse|string>(this.rootUrl,null).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    console.log(error.message);
    return error.message;
  }
}
