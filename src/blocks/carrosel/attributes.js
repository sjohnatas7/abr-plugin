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
		type: 'number',
		default: 200
	},
	padding:{
		type: "number",
		default: 20
	},
	typeOfWidth:{
		type: 'string',
		default: 'wide'
	},

};

export default attributes;
