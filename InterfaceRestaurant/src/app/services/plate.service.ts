import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Plate } from '../models/plate.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlateService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getAllPlates(): Observable<Plate[]> {
    return this.http.get<Plate[]>(`${this.apiUrl}/plate/all`);
  }

  getPlateById(id: number): Observable<Plate> {
    return this.http.get<Plate>(`${this.apiUrl}/plate/find/${id}`);
  }

  createPlate(plate: Plate): Observable<Plate> {
    return this.http.post<Plate>(`${this.apiUrl}/plate/create`, plate);
  }

  deletePlate(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/plate/delete/${id}`);
  }
}
