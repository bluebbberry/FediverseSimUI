import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FediverseHistory {
  // Add properties from your FediverseHistory model
}

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private apiUrl = '/api/simulations';

  constructor(private http: HttpClient) {}

  getSimulation(id: string): Observable<FediverseHistory> {
    return this.http.get<FediverseHistory>(`${this.apiUrl}/${id}`);
  }

  startSimulation(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/start/${id}`);
  }
}
