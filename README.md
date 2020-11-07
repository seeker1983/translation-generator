# Translation File Generator

> Generates translation file based on rules.

## Installation

``` bash
# install dependencies
npm install
```

## Run
``` bash
node translation-generator.js
```
Resulting files for structure(if enabled) and translation will be created in appropriate folder.

## Configuration
Configuration values are set in _config.js_
- 	OUTPUT_FILE: where to store ('./translations/en/default.po')
-	STRUCTURE_FILE: where to store structure, if enabled(default 'translation-structure.json')
- CREATE_STRUCTURE_FILE: set to false to skip creating structure file


## Testing 
``` bash
node test.js
```
Run a simple test to check package integrity and correct setup.

## JSON Generator
``` bash
node json-generator.js
```
Works same way, but translates 
```
${'String1'} 
${'String2'} 
```
patterns into 
```
{
	"String1":"String1",
	"String2":"String2"
}
```
json objects.

Associated config is **config-json.js**

# Files

##### *Executable*

- **translation-generator.js** - Main executable
- **json-generator.js** - Auxillary executable
- **test.js** - Test wrapper

##### *Auxilary*

- **config.js** - Configuration parameters
- **config-json.js** - Configuration parameters for **json-generator**
- **spreadsheet.php** - Loads spreadsheet data
- **service-account.json** - Service account example
- **package.json** - Package description
- **test**(folder) - Testing dummy data

