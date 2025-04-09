import {AbstractDTO} from "./abstract-dto";

export class PageDTO<U> extends AbstractDTO {
  content: U[];

  number: number;

  totalElements!: number;

  totalPages!: number;

  constructor() {
    super();
    this.content = [];
    this.number = 0;
  }
}
