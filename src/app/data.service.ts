import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }
LoadDataForWestDeck(){
  /** Uncommment for local */
  const url = '/api/vehiclesinlot/:west%20deck';
  return this.http.get(url);
}

LoadDataForCentralDeck()
{
  const url = '/api/vehiclesinlot/:central%20deck';
  return this.http.get(url);
}

LoadDataForFacultyLotA()
{
  const url = '/api/vehiclesinlot/:faculty%20lot%20a';
  return this.http.get(url);
}

LoadDataForCentralParkingLot()
{
  const url = '/api/vehiclesinlot/:central%20parking%20lot';
  return this.http.get(url);
}

LoadDataForEastEconomy()
{
  const url = '/api/vehiclesinlot/:east%20economy';
  return this.http.get(url);
}

LoadDataForResidentParking()
{  const url = '/api/vehiclesinlot/:resident%20parking';
return this.http.get(url);}

LoadDataForWestParking()
{
  const url = '/api/vehiclesinlot/:west%20parking';
  return this.http.get(url);
}
} 
