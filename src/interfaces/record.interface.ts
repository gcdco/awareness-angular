import { State } from "./state.interface";

export interface Record {
  name: string
  createdOn: Date;
  beforeState: State;
  afterState: State;
  count: number;
}
