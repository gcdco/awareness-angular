import { State } from "./state.interface";

export interface Record {
    name: string,
    count: number,
    createdOn: Date,
    beforeState: State,
    afterState: State,
}