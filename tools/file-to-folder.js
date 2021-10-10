const fs = require("fs");
const mkdirp = require("mkdirp");

const argv = require("yargs/yargs")(process.argv.slice(2))
  .command("$0 <file>", "parse given file", (yargs) => {
    yargs.positional("filename", {
      describe: "filename to parse",
      type: "string",
    });
  })
  .example(
    "node tools/file-to-folder.js README.md -r modules/fe-fe/",
    "Parses modules/fe-fe/README.md and saves folder to modules/fe-fe/README.md"
  )
  .alias("r", "root")
  .describe("r", "Root folder to work from")
  .help("h")
  .alias("h", "help").argv;

async function main(argv) {
  const root = argv.root || "./";
  const sectionsArray = fs
    .readFileSync(`${root}${argv.file}`)
    .toString()
    .split(/\n\#\s/)
    .map((section) => `# ${section}`); // Readds the header that was removed from split;

  await Promise.all(
    sectionsArray.map(async (section, i) => {
      // Creates a modules-## folder for each section
      // TODO: Currently only supports hardcoded folder titles
      const moduleFolder = `${root}module-${i.toString().padStart(2, "0")}`;

      // TODO: Inject grading sections for each README module (maybe lesson?)
      await mkdirp(moduleFolder);
      return fs.writeFile(`${moduleFolder}/README.md`, section, (err) => {
        if (err) throw err;
        console.log(`Saved ${moduleFolder}`);
      });
    })
  );

  console.log("hi", argv, sectionsArray.length);
}

main(argv);
