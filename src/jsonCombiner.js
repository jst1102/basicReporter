const fs = require("fs");
const path = require("path");

function combineJsonFiles(folderPath, outputFilePath) {
  const jsonFiles = fs
    .readdirSync(folderPath)
    .filter((file) => path.extname(file).toLowerCase() === ".json");
  const combinedData = [];

  console.log("Combining JSON files...");

  jsonFiles.forEach((file) => {
    const jsonData = JSON.parse(
      fs.readFileSync(path.join(folderPath, file), "utf8")
    );
    combinedData.push(...jsonData);
  });

  const combinedJson = JSON.stringify(combinedData);

  fs.writeFileSync(outputFilePath, combinedJson, "utf8");

  console.log("Combining JSON files completed.");
}

module.exports = {
  combineJsonFiles,
};
