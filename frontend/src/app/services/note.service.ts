import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  serverUrl = 'http://localhost:8080/api/notebook';
  constructor(private httpClient: HttpClient) {}

  getNotes() {
    return this.httpClient.get(this.serverUrl);
  }

  getNotesColor(color: string) {
    return this.httpClient.get(this.serverUrl);
  }

  create(note: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(this.serverUrl, JSON.stringify(note), {
      headers,
    });
  }

  getNotesQuery(query: string) {
    return this.httpClient.get(this.serverUrl);
  }
}
