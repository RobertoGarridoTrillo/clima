import {Component} from '@angular/core';
import {ClimaService} from "../../services/clima.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  urlImagen = "assets/clima.png";
  ciudad = "";
  temperatura = 0;
  humedad = 0;
  clima = "";
  query = false;
  loading = false;

  constructor(private _climaService: ClimaService) {
  }

  obtenerCiudad() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(
      next => {
        this.loading = false;
        this.query = false;
        this.temperatura = next.main.temp ;
        this.humedad = next.main.humidity;
        this.clima = next.weather[0].main;
        console.log(next);
      }
    )
  }

}
