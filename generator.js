module.exports = {
	process: function(config){
		const fs = require('fs')
		const _ = require('lodash')
		const fg = require('fast-glob');

		/* All results */
		var structure = [];

		/* Loop through yaml and tmpl */
		Object.keys(config.SOURCES).map(extension => {
			/* Get all matching files*/
			const items = fg.sync('./**/' + extension, { onlyFiles: true, dot: true });
			items.map(file => {
				var entries = [];
				/* Load file data */
				const str = fs.readFileSync(file, config.ENCODING);
				/* If we have several regexp for extension, check them all */
				config.SOURCES[extension].map(reStr => {
					let re = new RegExp(reStr, 'gm')

					/* RegExp "Match all" loop */
					do {
					    match = re.exec(str);
					    if (match) {
					    	entries.push(match[1])
					    }
					} while (match);			


				})
				structure.push({file: file, entries: entries})
			})
		})

		/* Create structure file, if needed */
		if(	config.CREATE_STRUCTURE_FILE ) {
			fs.writeFileSync(config.STRUCTURE_FILE, JSON.stringify(structure, null, 2))
		}

		/* Sort entries, remove duplicates */
		var entries = _.chain(structure).map('entries').flatten().sort().uniq().value();
		var output = config.RENDERER(entries);

		/* Save files, create folders if required */
		var path = require('path').dirname(config.OUTPUT_FILE);
		require('mkdirp').sync(path);
		fs.writeFileSync(config.OUTPUT_FILE, output)

	}
}