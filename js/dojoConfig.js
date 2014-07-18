dojoConfig = {
	async: true,
	parseOnLoad: false,
	packages: [
	{ 
		name: 'jquery', 
		//location: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2', 
		location: 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1', 
		main: 'jquery' 
	},
	{
		name: 'chardinjs',
		location: '/js', 
		main: 'chardinjs.min'
	}
	]
}
