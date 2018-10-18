import Numbers from "../../Numbers";
import {expect} from 'chai'

describe("Numbers", function() {
  it("should read number: 5", function() {
    const s: string = "5";
    const number = new Numbers(s);
    expect(number.read()).to.equal("năm");
  });

  it("should read number: 32", function() {
    const s: string = "32";
    const number = new Numbers(s);
    expect(number.read()).to.equal("ba mươi hai");
  });

  it("should read number: 15", function() {
    const s: string = "15";
    const number = new Numbers(s);
    expect(number.read()).to.equal("mười lăm");
  });

  it("should read number: 21", function() {
    const s: string = "21";
    const number = new Numbers(s);
    expect(number.read()).to.equal("hai mươi mốt");
  });

  it("should read number: 001", function() {
    const s: string = "001";
    const number = new Numbers(s);
    expect(number.read()).to.equal("không trăm lẻ một");
  });

  it("should read number: 068", function() {
    const s: string = "068";
    const number = new Numbers(s);
    expect(number.read()).to.equal("không trăm sáu mươi tám");
  });

  it("should read number: 060", function() {
    const s: string = "060";
    const number = new Numbers(s);
    expect(number.read()).to.equal("không trăm sáu mươi");
  });

  it("should read number: 162", function() {
    const s: string = "162";
    const number = new Numbers(s);
    expect(number.read()).to.equal("một trăm sáu mươi hai");
  });

  it("should read number: 601", function() {
    const s: string = "601";
    const number = new Numbers(s);
    expect(number.read()).to.equal("sáu trăm lẻ một");
  });

  it("should read number: 611", function() {
    const s: string = "611";
    const number = new Numbers(s);
    expect(number.read()).to.equal("sáu trăm mười một");
  });

  it("should read number: 221", function() {
    const s: string = "221";
    const number = new Numbers(s);
    expect(number.read()).to.equal("hai trăm hai mươi mốt");
  });

  it("should read number: 155", function() {
    const s: string = "155";
    const number = new Numbers(s);
    expect(number.read()).to.equal("một trăm năm mươi lăm");
  });

  it("should read number: 600", function() {
    const s: string = "600";
    const number = new Numbers(s);
    expect(number.read()).to.equal("sáu trăm");
  });

  it("should read number: 610", function() {
    const s: string = "610";
    const number = new Numbers(s);
    expect(number.read()).to.equal("sáu trăm mười");
  });

  it("should read first number: 1", function() {
    const s: string = "1";
    const number = new Numbers(s);
    expect(number.read(true)).to.equal("một");
  });

  it("should read first number: 10", function() {
    const s: string = "10";
    const number = new Numbers(s);
    expect(number.read(true)).to.equal("mười");
  });

  it("should read first number: 21", function() {
    const s: string = "21";
    const number = new Numbers(s);
    expect(number.read(true)).to.equal("hai mươi mốt");
  });

  it("should read first number: 221", function() {
    const s: string = "221";
    const number = new Numbers(s);
    expect(number.read(true)).to.equal("hai trăm hai mươi mốt");
  });

  it("should read number: 000", function() {
    const s: string = "000";
    const number = new Numbers(s);
    expect(number.read()).to.equal("");
  });

  it("should read number: 000", function() {
    const s: string = "000";
    const number = new Numbers(s);
    expect(number.read(true)).to.equal("không");
  });

  it("should read number: 601", function() {
    const s: string = "601";
    const number = new Numbers(s);
    expect(number.read(true)).to.equal("sáu trăm lẻ một");
  });

  it("should read first number: 1, before billion group", function() {
    const s: string = "1";
    const number = new Numbers(s);
    expect(number.read(true, true)).to.equal("một nghìn tỉ");
  });

  it("should read number: 000, before billion group", function() {
    const s: string = "000";
    const number = new Numbers(s);
    expect(number.read(false, true)).to.equal("tỉ");
  });
});
