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
  const url = '/api/vehiclesinlot/West%20Deck';
  return this.http.get(url);
}

LoadDataForCentralDeck()
{
  const url = '/api/vehiclesinlot/Central%20Deck';
  return this.http.get(url);
}

LoadDataForFacultyLotA()
{
  const url = '/api/vehiclesinlot/Faculty%20A';
  return this.http.get(url);
}

LoadDataForCentralParkingLot()
{
  const url = '/api/vehiclesinlot/Central%20Parking';
  return this.http.get(url);
}

LoadDataForEastEconomy()
{
  const url = '/api/vehiclesinlot/East%20Economy';
  return this.http.get(url);
}

LoadDataForResidentParking()
{  const url = '/api/vehiclesinlot/Resident%20Parking';
return this.http.get(url);}

LoadDataForWestParking()
{
  const url = '/api/vehiclesinlot/West%20Parking';
  return this.http.get(url);
}
} 
