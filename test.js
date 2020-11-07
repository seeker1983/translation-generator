const fs = require('fs')
const { exec } = require("child_process");

var tests = [
	{
		configName: './config.js',
		structure_example: 'test/translation-structure-example.json',
		output_example: 'test/default-example.po'
	},
	{
		configName: './config-json.js',
		structure_example: 'test/json-structure-example.json',
		output_example: 'test/main-example.json'
	},
]

tests.map(test => {
	var config = require(test.configName);

	function gets(fname) {
		return fs.readFileSync(__dirname + '/' + fname, config.ENCODING);
	}

	try {
		fs.unlinkSync(config.STRUCTURE_FILE);
		fs.unlinkSync(config.OUTPUT_FILE);
	} catch(e){}

	console.log('Executing ' + __dirname + '/' + config.NAME + '.js')
	exec('node ' + __dirname + '/' + config.NAME + '.js',
		function(){
			if(gets(test.structure_example) == gets(config.STRUCTURE_FILE))
				console.log(`Structure matches for [${config.NAME}].`);
			else
				throw `Structure mismatch for [${config.NAME}]!`


			if(gets(test.output_example) == gets(config.OUTPUT_FILE))
				console.log(`Output matches for [${config.NAME}].`);
			else
				throw `Output mismatch for [${config.NAME}]!`


		}
	);

})


//console.log('All tests successful.')
