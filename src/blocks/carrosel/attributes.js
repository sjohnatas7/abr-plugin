const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	gallery: {
		type: 'array'
	},
	backgroundColor: {
		type: 'string',
		default: '#000000',
	},
	maxHeight:{
		type: 'string',
		default: '200px'
	},

};

export default attributes;
