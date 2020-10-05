const fs = require('fs')
const config = require('./config')
const s1 = fs.readFileSync('test/translation-structure-example.json', config.ENCODING);
const s2 = fs.readFileSync(config.STRUCTURE_FILE, config.ENCODING);

if(s1 == s2)
	console.log('Structure matches.');
else
	throw 'Structure mismatch!';

const s3 = fs.readFileSync('test/default-example.po', config.ENCODING);
const s4 = fs.readFileSync(config.OUTPUT_FILE, config.ENCODING);

if(s3 == s4)
	console.log('Glossary matches.');
else
	throw 'Glossary mismatch!';


console.log('All tests successful.')