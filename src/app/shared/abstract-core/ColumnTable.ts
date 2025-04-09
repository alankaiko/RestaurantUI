import {TemplateRef} from "@angular/core";
import {TypeField} from "./type-field";

export interface ColumnTable {
  title: string;

  sortingField?: string;

  field?: string;

  width?: string;

  styleClass?: string;

  tipe?: TypeField;

  limitCaracter?: boolean;

  command?: (valor: any) => void;

  transformer?: (valorCampo: any, entidade: any) => any;

  templateRef?: TemplateRef<any>;
}
