const path = require('path');
const fs = require('fs');


let jsonDirPath = path.resolve('./json');
let jsons = fs.readdirSync(jsonDirPath);
let jsonObjs = jsons.map(json => {
	let jsonPath = path.join(jsonDirPath, json);
	return {
		name: json,
		str: fs.readFileSync(jsonPath, 'UTF-8')
	};
});

let distPath = path.resolve('../dist');
let distJsonDirPath = path.join(distPath, 'json');
if(!fs.existsSync(distJsonDirPath)){
	fs.mkdirSync(distJsonDirPath);
}
jsonObjs.forEach(jsonObj => {
	let filepath = path.join(distJsonDirPath, jsonObj.name);
	if(fs.existsSync(filepath)){
		fs.unlinkSync(filepath);
	}
	fs.writeFileSync(filepath, jsonObj.str, { flag: 'a+' });
});