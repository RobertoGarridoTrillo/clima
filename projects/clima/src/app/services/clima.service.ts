import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  /* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */

  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  key = '4ac2b3a45d4d45c02a43355e4c73abb9';


  constructor(private http: HttpClient) {
  }

  getClima(ciudad: string):Observable<any> {
    const URL = this.url + ciudad + '&appid=' + this.key + '&units=metric' ;
    return this.http.get(URL);
  }
}
