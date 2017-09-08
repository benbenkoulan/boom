export function fetchEventList(){
	return new Promise((resolve, reject) => {
		resolve([{
			id: 0,
			title: '我今天想做的第一件事',
			status: 0
		},{
			id: 1,
			title: '我今天想做的第二件事',
			status: 0
		},{
			id: 2,
			title: '我今天想做的第三件事',
			status: 0
		}])
	});
}