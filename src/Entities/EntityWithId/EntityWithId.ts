import { v4 } from "uuid";

class EntityWithId {
  constructor() {
    this.id = v4();
  }

  protected id: string;
}

export default EntityWithId;
