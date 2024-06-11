import { Impression } from "./impression.interface";

export interface State {
	isBeforeState: boolean;
	frequencyCounts: Impression[];
	impressions: string;
}