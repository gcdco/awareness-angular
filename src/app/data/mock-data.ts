export const MOCK_RECORD = {
	record: {
		name: 'SMK',
		createdOn: new Date(),
		count: 3,
		beforeState: {
			isBeforeState: true,
			impressions: [
				{
					description: 'impression',
					createdOn: new Date(),
					count: 2,
				},
				{
					description: 'impression2',
					createdOn: new Date(),
					count: 1,
				},
			],
		},
		afterState: {
			isBeforeState: false,
			impressions: [
				{
					description: 'impression',
					createdOn: new Date(),
					count: 2,
				},
				{
					description: 'impression2',
					createdOn: new Date(),
					count: 3,
				},
			],
		},
	}
};