import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class Httpservice {
    constructor(private http: HttpClient) { }

    maidsGet(apiendPoints: string, queryParams: string = '') {
        return this.http.get(`${environment.API_BASE_URL}${apiendPoints}${queryParams ? '?'+queryParams : ''}`)
    }

    maidsPost(apiendPoints: string, apiData: any) {
        return this.http.post(environment.API_BASE_URL + apiendPoints, apiData)
    }

    maidsPut(apiendPoints: string, apiData: any) {
        return this.http.post(environment.API_BASE_URL + apiendPoints, apiData)
    }

    maidsRemove(apiendPoints: string) {
        return this.http.delete(environment.API_BASE_URL + apiendPoints)
    }

}