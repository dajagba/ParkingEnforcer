import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }
LoadData(){
  /** Uncommment for local */
  const url = '/api/vehiclesinlot';
  //const url = 'https://ancient-inlet-70380.herokuapp.com/api/vehiclesinlot/api/vehiclesinlot';
  return this.http.get(url);
}
} 
