import {AbstractEntity} from '../abstract-core/model/abstract-entity';
import {Establishment} from './establishment';

export class Avaliation extends AbstractEntity {
  note: number;
  coment: number;
  establishment = new Establishment;
}
