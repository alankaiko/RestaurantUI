import {AbstractEntity} from "../model/abstract-entity";
import {AbstractDTO} from "../model/abstract-dto";
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./abstract-service";
import {PageDTO} from "../model/page-dto";
import {environment} from '../../../../environments/environment';

export abstract class AbstractCrudService<T extends AbstractEntity, D extends AbstractDTO> extends AbstractService {

  constructor(protected path: string, protected http: HttpClient) {
    super();
  }

  protected url(path?: string) {
    const url = `${environment.apiUrl}/${this.path}`;
    return path ? url.concat(`/${path}`) : url;
  }

  findById(idCode: number): Promise<T> {
    return this.http.get<T>(this.url(`${idCode}`)).toPromise();
  }

  filtering(filtro?: D): Promise<PageDTO<T>> {
    return this.http.post<PageDTO<T>>(this.url('listPaginated'), filtro).toPromise();
  }

  listEntities(): Promise<T[]> {
    return this.http.get<T[]>(this.url()).toPromise();
  }

  saveEntity(entity: T): Promise<T> {
    return this.http.post<T>(this.url(), entity).toPromise();
  }

  deleteEntity(idCode: number): Promise<T> {
    return this.http.delete<T>(this.url(`${idCode}`)).toPromise();
  }
}
