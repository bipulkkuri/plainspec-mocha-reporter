"use strict";
var chai = require("chai");
var should = chai.should();
//test hello
describe("#Fly", function() {
  it("should return weapons ready", function() {
    let test = "weapons ready";
    test.should.eql("weapons ready");
  });

  it("should return weather ok", function() {
    let test = "weather ok";
    test.should.eql("weather ok");
  });

  describe("#Pilots", function() {
    it("should return Pilots ready", function() {
      let test = "Pilots ready";
      test.should.eql("Pilots ready");
    });

    it("should return Signal ready", function() {
      let test = "Signal ready";
      test.should.eql("Signal ready");
    });
    it("should return Ammmo ready", function() {
      let test = "Ammmo ready";
      test.should.eql("Ammmo ready");
    });
    it("should return Radar ready", function() {
      let test = "Radar ready";
      test.should.eql("Radar ready");
    });
  });
});
