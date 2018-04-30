import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }
LoadData(){
  const url = 'http://localhost:3000/api/vehiclesinlot';
  return this.http.get(url);
}
} 
