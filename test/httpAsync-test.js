//process.env.NODE_ENV = 'test';

let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
chai.use(chaiHttp);
let server = require("../demo/server");
var http = require("http");

describe("Suite Test api", function() {
  it("should fail a GET /", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it("should fail a GET /api", done => {
    chai
      .request(server)
      .get("/api")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it("should pass a GET /api/ping", done => {
    chai
      .request(server)
      .get("/api/ping")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should pass a GET /api/status", done => {
    chai
      .request(server)
      .get("/api/status")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should pass a GET /api/longFetch", done => {
    chai
      .request(server)
      .get("/api/longFetch")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
