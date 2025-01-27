export default {
	name: 'event',
	title: 'Event',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Club Name',
			type: 'string',
		},
		{
			name: 'event_name',
			title: 'Event Name',
			type: 'string',
		},
		{
			name: 'event_description',
			title: 'Event Description',
			type: 'string',
		},
		{
			name: 'date_time',
			title: 'Date Time',
			type: 'datetime',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
};
