# Cypress Reporter and JSON Combiner

This package provides a Cypress plugin for reporting test results and combining multiple JSON files into a single file.

## Installation

To install the package, run the following command:

```javascript
npm install basic-reporter
```

## Usage

### Reporting Test Results

In your Cypress project, import the `reporter` module from the package and add it to the `test:after:run` event:

```javascript
import { reporter } from "cypress-reporter-json-combiner";

Cypress.on("test:after:run", reporter.reportTestResults);
```

The reportTestResults function will generate a JSON file for each test result in the ./reports directory.

### Combining JSON Files

To combine multiple JSON files into a single file, import the jsonCombiner module:

```javascript
const { jsonCombiner } = require("cypress-reporter-json-combiner");

jsonCombiner.combineJsonFiles("./reports", "./finalReports/allReports.json");
```

This will combine all JSON files in the ./reports directory and write the combined data to ./finalReports/allReports.json.

## Configuration

The reportTestResults function accepts an optional configuration object as the second argument:

```javascript
Cypress.on("test:after:run", (results, config) => {
  reporter.reportTestResults(results, {
    reportDir: "./my-reports", // Default: './reports'
    fileName: "custom-report", // Default: 'test-results-{timestamp}'
  });
});
```

1. **reportDir:** The directory where the JSON files will be saved. Default is ./reports.

2. **fileName:** The base name for the JSON files. A timestamp will be appended to the filename. Default is test-results-{timestamp}.

### API

1. **reporter.reportTestResults(results, config) results (Object):** The test results object provided by Cypress.
2. **config (Object, optional):** An optional configuration object.
3. **reportDir (String):** The directory where the JSON files will be saved.
4. **fileName (String):** The base name for the JSON files.

### jsonCombiner.combineJsonFiles(inputDir, outputFilePath)

1. **inputDir (String):** The directory containing the JSON files to be combined.
2. **outputFilePath (String):** The file path where the combined JSON data will be written.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
