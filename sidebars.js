module.exports = {
	docs: [
		'introducing',
		'installation',
		{
			type: 'category',
			label: 'Developer Guide',
			collapsed: false,
			items: [
				'guide/preparations',
				'guide/first-script',
				'guide/extends',
				'guide/dialogue',
				'guide/properties', 
				'guide/create-b20-token',
				'guide/quickly-create-b20',
				'guide/create-b721-token',
				'guide/quickly-create-b721',
			],
		},
		{
			type: 'category',
			label: 'API',
			collapsed: false,
			items: [
				'api/best-number',
				'api/transaction',
				'api/block',
				'api/script',
				'api/tx-event', 
				'api/block-event',
				'api/model',
				'api/call',
				'api/local-simulation',
			],
		},
		'json-rpc',
		'others',
		'cruels',
	],
};