var mocha = require("mocha");
var printf = require("printf");
var color = mocha.reporters.Base.color;
var symbols = mocha.reporters.Base.symbols;
module.exports = plainspecReporter;

/**
 * Initialize a new `plainspec`  test reporter.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner
 * @param {Object} options
 */
function plainspecReporter(runner, options) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;
  var result = [];
  var indents = 0;

  // default chars
  options = options || {};

  var reporterOptions = options.reporterOptions || {};
  options.startMessage = reporterOptions.startMessage || "Release";
  options.suitePad = reporterOptions.suitePad || " ";
  options.rootMessage = reporterOptions.rootMessage || " Mocha Custom Report ";
  options.padCount = reporterOptions.padCount || 26;
  options.padChar = reporterOptions.padChar || "=";
  options.epilogue = reporterOptions.epilogue || false;

  function indent() {
    return Array(indents).join(options.suitePad);
  }
  runner.on("start", function() {
    result.push(printf("Testing %s possibility", options.startMessage));
  });

  runner.on("suite", function(suite) {
    ++indents;
    result.push(printf("%s%s", indent(), suite.title));
  });

  runner.on("suite end", function() {
    --indents;
  });

  runner.on("pass", function(test) {
    passes++;
    result.push(
      printf("%s%s %s (%dms)", indent(), symbols.ok, test.title, test.duration)
    );
  });

  runner.on("fail", function(test, err) {
    failures++;
    result.push(
      printf(
        "%s%s %s %s %s",
        indent(),
        symbols.err,
        test.title,
        err.stack,
        test.file
      )
    );
  });

  runner.on("end", function() {
    result.push(
      printf(
        "\nSummary: %s Passed:%d %s %s Failed:%d %s Total:%d/%d",
        symbols.ok,
        passes,
        getTestNounFor(passes),
        symbols.err,
        failures,
        getTestNounFor(failures),
        passes,
        passes + failures
      )
    );
    failures > 0
      ? result.push(printf("Result: %s not possible", options.startMessage))
      : result.push(printf("Result: %s possible", options.startMessage));
    console.log(
      "\n%s%s%s",
      padding(options.padCount, options.padChar),
      options.rootMessage,
      padding(options.padCount, options.padChar)
    );
    result.forEach(parseResultArray);
    console.log(
      "\n%s%s%s",
      padding(options.padCount, options.padChar),
      options.rootMessage,
      padding(options.padCount, options.padChar)
    );
  });

  function parseResultArray(value) {
    console.log("%s", value);
  }
  if (options.epilogue) {
    runner.once("end", this.epilogue.bind(this));
  }
}

/**
 * Returns a singularized or plularized noun for "test" based on test count
 *
 * @param {!Number} testCount
 * @returns {String}
 */
function getTestNounFor(testCount) {
  if (testCount === 1) {
    return "test";
  }
  return "tests";
}

function padding(num, ch) {
  var str = "",
    i;
  ch = ch || " ";
  for (i = 0; i < num; i += 1) {
    str += ch;
  }
  return str;
}
mocha.utils.inherits(plainspecReporter, mocha.reporters.Spec);
