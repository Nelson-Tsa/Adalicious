import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Command } from '../models/command.model';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080';

  getAllCommands(): Observable<Command[]> {
    console.log(`Appel API: ${this.apiUrl}/command/all`);
    return this.http.get<Command[]>(`${this.apiUrl}/command/all`).pipe(
      tap(data => console.log('API Response:', data)),
      catchError(this.handleError)
    );
  }

  getCommandById(id: number): Observable<Command> {
    console.log(`Appel API: ${this.apiUrl}/command/find/${id}`);
    return this.http.get<Command>(`${this.apiUrl}/command/find/${id}`).pipe(
      tap(data => console.log(`Command ${id} data:`, data)),
      catchError(this.handleError)
    );
  }

  createCommand(command: Command): Observable<Command> {
    console.log(`Appel API: ${this.apiUrl}/command/create`, command);
    return this.http.post<Command>(`${this.apiUrl}/command/create`, command).pipe(
      tap(data => console.log('Created command:', data)),
      catchError(this.handleError)
    );
  }

  deleteCommand(id: number): Observable<string> {
    console.log(`Appel API: ${this.apiUrl}/command/delete/${id}`);
    return this.http.delete<string>(`${this.apiUrl}/command/delete/${id}`).pipe(
      tap(data => console.log(`Command ${id} deleted:`, data)),
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      // Erreur côté client ou problème réseau
      errorMessage = `Erreur réseau: ${error.error}`;
      console.error('Erreur réseau:', error);
    } else {
      // Le backend a renvoyé un code d'erreur
      errorMessage = `Le serveur a retourné: ${error.status}, message: ${error.error}`;
      console.error(`Backend a retourné code ${error.status}, body:`, error.error);
    }
    return throwError(() => new Error(errorMessage));
  }
}
