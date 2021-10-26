import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Conversao,
  ConversaoResponse
} from '../models';


@Injectable({
  providedIn: 'root'
})
export class ConversorService {

    // private readonly BASE_URL = 'http://api.fixer.io/latest';
    private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
  constructor(private http: HttpClient) { }


  /**
   * Realiza a chamada para a API de conversão de moedas.
   * 
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http
                .get(this.BASE_URL + params);
    
  }






}