import { Impression } from "./impression.interface";

export interface State {
	isBeforeState: boolean;
	impressions: Impression[];
}