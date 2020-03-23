import Base from "./Base/Controller.es6";

export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}

  update() {
    console.log("update");
  }
}
