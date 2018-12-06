plainspec-mocha-reporter
===================
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

plainspec reporter for Mocha.

The plainspec-mocha-reporter is a reporter for mocha.  
Useful for scenarios when async calls are logged so that console is clean for test report.

Installation
=====
Save it as dev dependency in your project
`npm install plainspec-mocha-reporter --save-dev`

or

Do a `npm install` after `plainspec-mocha-reporter` as `devDependencies` to your `package.json` file
```
//package.json
"devDependencies": {
  ..
  "plainspec-mocha-reporter": "^1.0.0",
  ..
}
```

Usage
=====


Refer [Mocha Third party reporters](https://github.com/mochajs/mocha/wiki/Third-party-reporters)



and then run to see output

`mocha --reporter plainspec-mocha-reporter  --check-leaks test/`

or
look at configuration options  below.

For `npm test`
in `package.json` in script section add
```
..
"scripts": {
    "test": "node_modules/mocha/bin/_mocha --reporter plainspec-mocha-reporter  test/*.js"
  },
..
```   

Full configuration options
==============
| Parameter | Effect |
| --------- | ------ |
| startMessage | Starting Message (defaults to 'Release') |
| suitePad | Padding used between suits,pass,fail (defaults to ' ') |
| rootMessage | The report name  (defaults to ' Mocha Custom Report ') |
| padCount | Padding for the char in padChar. (defaults to '26') |
| padChar | The char (defaults to '=') |


Example output
==============


`mocha --reporter spec  --check-leaks test/`
```
  #hello world
    ✓ should return hello world


  1 passing (7ms)
```
with Custom report with symbol ok
`mocha --reporter plainspec-mocha-reporter  --check-leaks test/`

```
========================== Mocha Custom Start Report ==========================
	 Testing Release possibility
	 suite #hello world
		 ✓ should return hello world (1ms)
	 Summary: ✓ Passed:1 tests ✖ Failed:0 test Total:1/1
     Result: Release not possible
========================== Mocha Custom End Report ============================
```
where test/ folder has following test File
```
\\ test\test.js
"use strict";
var chai = require('chai')
var should = chai.should()
//test hello
describe('#hello world', function() {
  it('should return hello world', function() {
    let test = 'hello world';
    test.should.eql('hello world');
  });
});

```
and with symbol err
```
========================== Mocha Custom Start Report ==========================
	 Testing Release possibility
	 suite #hello world
		 ✖ should return hello world AssertionError: expected 'hello world' to deeply equal 'hello world nope'
    at Context.<anonymous> (test/test.js:8:17)
	 Result: Passed:0 Failed:1 Total:0/1
   Summary: ✓ Passed:0 tests ✖ Failed:1 test Total:0/1
   Result: Release not possible
========================== Mocha Custom End Report ============================
```
where test/ folder has following test File

```
\\ test\test.js
"use strict";
var chai = require('chai')
var should = chai.should()
//test hello
describe('#hello world', function() {
  it('should return hello world', function() {
    let test = 'hello world';
    test.should.eql('hello world nope');
  });
});

```

with customization
`node_modules/mocha/bin/_mocha  --reporter index  --check-leaks test/ --reporter-options rootMessage="StarShip Enterprise Test",padChar="+",padCount=30,suitePad="   ",startMessage="Take Off"`
```

++++++++++++++++++++++++++++++StarShip Enterprise Test++++++++++++++++++++++++++++++
Testing Take Off possibility

   #Fly
   ✓ should return weapons ready (1ms)
   ✓ should return weather ok (0ms)
      #Pilots
      ✓ should return Pilots ready (0ms)
      ✓ should return Signal ready (0ms)
      ✓ should return Ammmo ready (0ms)
      ✖ should return Radar ready AssertionError: expected 'Radar ready' to deeply equal 'Radar not  ready'
    at Context.<anonymous> (test/nested-test.js:32:19) ~/plainspec-mocha-reporter/test/nested-test.js
   #Fleet Ready
   ✓ should be Fueled (0ms)
   ✓ should return check Engine (0ms)

Summary: ✓ Passed:7 tests ✖ Failed:1 test Total:7/8
Result: Take Off not possible

++++++++++++++++++++++++++++++StarShip Enterprise Test++++++++++++++++++++++++++++++
```

without
`node_modules/mocha/bin/_mocha  --reporter index  --check-leaks test/ `

```
========================== Mocha Custom Report ==========================
Testing Release possibility

 #Fly
 ✓ should return weapons ready (1ms)
 ✓ should return weather ok (0ms)
  #Pilots
  ✓ should return Pilots ready (0ms)
  ✓ should return Signal ready (0ms)
  ✓ should return Ammmo ready (0ms)
  ✖ should return Radar ready AssertionError: expected 'Radar ready' to deeply equal 'Radar not  ready'
    at Context.<anonymous> (test/nested-test.js:32:19) ~/plainspec-mocha-reporter/test/nested-test.js
 #Fleet Ready
 ✓ should be Fueled (0ms)
 ✓ should return check Engine (0ms)

Summary: ✓ Passed:7 tests ✖ Failed:1 test Total:7/8
Result: Release not possible

========================== Mocha Custom Report ==========================
```

Support
===============


Feel free to reach out with your questions or
concerns.PRs welcome.

[Bipul K Kuri](https://github.com/bipulkkuri)
