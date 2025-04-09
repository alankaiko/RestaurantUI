import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractCrudService} from '../shared/abstract-core/service/abstract-crud.service';
import {Avaliation} from '../shared/models/avaliation';
import {AvaliationDTO} from '../shared/dto/avaliation-dto';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService extends AbstractCrudService<Avaliation, AvaliationDTO> {

  constructor(http: HttpClient) {
    super('avaliationController', http);
  }

}
