import { Component, OnInit } from '@angular/core';
import { FDEHttpService } from '../service/fde-http.service';
import { IResponse } from '../model/response.interface';
import { catchError, mapTo } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ui.fde';
  latestImageResponse!:IResponse | null;
  timenow:Date = new Date();
  showSpinner:boolean = true;
  noDataInStore:string = "No Data available in the collection. Try uploading at least three to view latest image.";
  showNoDataMessage:boolean = false;

  constructor(private readonly _service:FDEHttpService){}

  ngOnInit(): void {

    this._setLiveTimer();
    this._getLatestImage();

  }

  private _setLiveTimer(){
 setInterval(() => {
      this.timenow = new Date();
    }, 1000);

  }

  private _getLatestImage(){
     setInterval(() => {
       this._service.getLatestImage().subscribe(response =>
       {
        this.showSpinner = false;

        if(typeof(response) != 'string'){
          this.showNoDataMessage = false;
          this.latestImageResponse = {
          ImageUrl:response.ImageUrl,
          CreatedDateTime: new Date(response.CreatedDateTime),
          Description:response.Description,
          TotalInLastHr:response.TotalInLastHr
       };
      }
      else{
        this.showNoDataMessage = true;
      }
    })
    }, 5000);
  }

}
