"use strict";
var chai = require("chai");
var should = chai.should();

describe("#Fleet Ready", function() {
  it("should be Fueled", function() {
    let test = "Fueled";
    test.should.eql("Fueled");
  });

  it("should return check Engine", function() {
    let test = "Engine check";
    test.should.eql("Engine check");
  });
});
