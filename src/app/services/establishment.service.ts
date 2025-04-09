import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractCrudService} from '../shared/abstract-core/service/abstract-crud.service';
import {EstablishmentDTO} from '../shared/dto/establishment-dto';
import {Establishment} from '../shared/models/establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService extends AbstractCrudService<Establishment, EstablishmentDTO> {

  constructor(http: HttpClient) {
    super('establishmentController', http);
  }

}
