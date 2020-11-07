module.exports = {
	NAME: 'json-generator',
	OUTPUT_FILE : './translations/main.json',
	SOURCES : {
		'*.html' : [ '\$\{\s*["\'`]([^}]+)["\'`]\s*\}'],
		'*.tmpl' : [ '\\$\\s*\\{\\s*["\'`]([^}]+)["\'`]\\s*\\}'],
	},
	ENCODING: 'utf-8',
	STRUCTURE_FILE : 'json-structure.json',
	RENDERER: entries => JSON.stringify(require('lodash').zipObject(entries, entries), null, 2),
	CREATE_STRUCTURE_FILE : true // set to false to skip creating structure file
}

