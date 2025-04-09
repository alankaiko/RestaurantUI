import {AbstractEntity} from '../abstract-core/model/abstract-entity';
import {Contact} from './contact';
import {Address} from './address';
import {Avaliation} from './avaliation';

export class Establishment extends AbstractEntity {
  name: string;
  contact = new Contact;
  address = new Address;
  latitude: number;
  longitude: number;
  imageUrl: string;
  avaliations: Avaliation[] = [];

}
