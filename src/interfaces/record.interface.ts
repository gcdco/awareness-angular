export interface Record {
  name: string;
  createdOn: Date;
  beforeState: BeforeAfterState;
  afterState: BeforeAfterState;
  frequencyCount: FrequencyCount;
}
