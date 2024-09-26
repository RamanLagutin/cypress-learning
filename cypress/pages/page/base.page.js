import { ActionObjects } from '../objects/commonObjects/actionObjects';
import { HeaderObjects } from '../objects/commonObjects/headerObjects';
import { ModalObjects } from '../objects/commonObjects/modalObjects';

export class BasePage {
  constructor() {
    this.actionBar = new ActionObjects();
    this.header = new HeaderObjects();
    this.modal = new ModalObjects();
  }
}
