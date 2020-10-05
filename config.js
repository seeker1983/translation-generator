module.exports = {
	OUTPUT_FILE : './translations/en/default.po',
	SOURCES : {
 		'*.yaml' : ['title:\\s*"(.*?)"'],
		'*.tmpl' : [ '\\Wt\\s*"(.*?)"',
		             "\\Wt\\s*'(.*?)'",
		             '\\Wt\\s*`(.*?)`'
		           ],
	},
	ENCODING: 'utf-8',
	STRUCTURE_FILE : 'translation-structure.json',
	CREATE_STRUCTURE_FILE : true // set to false to skip creating structure file
}
