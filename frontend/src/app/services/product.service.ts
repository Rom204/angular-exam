import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers, Tasks } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    URL = "http://localhost:3000/"
    constructor(private http: HttpClient) { }

    // Create
    addItem(item: Tasks): Observable<Tasks> {
        return this.http.post<Tasks>(this.URL + "tasks/api/add", item);
    }

    // Read
    getItems(): Observable<Tasks[]> {
        return this.http.get<Tasks[]>(this.URL + "tasks/api/all");
    }
    // Read
    getCustomers(): Observable<Customers[]> {
        return this.http.get<Customers[]>(this.URL + "customers/api/all");
    }
}