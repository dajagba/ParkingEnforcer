import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }
LoadData(){
  /** Uncommment for local */
  //const url = 'http://localhost:3000/api/vehiclesinlot';
  const url = 'https://ancient-inlet-70380.herokuapp.com/api/vehiclesinlot/api/vehiclesinlot';
  return this.http.get(url, {responseType: 'text'})


}
} 
