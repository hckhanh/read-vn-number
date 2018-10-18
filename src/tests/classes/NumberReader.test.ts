import { expect } from 'chai'
import NumberReader from "../../NumberReader";

describe("Thousand", function () {
  it("should read number: 60.000", function () {
    const number: number = 60000;
    expect(NumberReader.read(number)).to.equal("sáu mươi nghìn");
  });

  it("should read number: 60", function () {
    const number: number = 60;
    expect(NumberReader.read(number)).to.equal("sáu mươi");
  });

  it("should read number: 600.000", function () {
    const number: number = 600000;
    expect(NumberReader.read(number)).to.equal("sáu trăm nghìn");
  });

  it("should read number: 600.001", function () {
    const number: number = 600001;
    expect(NumberReader.read(number)).to.equal("sáu trăm nghìn không trăm lẻ một");
  });

  it("should read number: 1.060.000", function () {
    const number: number = 1060000;
    expect(NumberReader.read(number)).to.equal(
      "một triệu không trăm sáu mươi nghìn"
    );
  });

  it("should read number: 15.000.000", function () {
    const number: number = 15000000;
    expect(NumberReader.read(number)).to.equal("mười lăm triệu");
  });

  it("should read number: 19.900.000", function () {
    const number: number = 19900000;
    expect(NumberReader.read(number)).to.equal("mười chín triệu chín trăm nghìn");
  });

  it("should read number: 30.000.000", function () {
    const number: number = 30000000;
    expect(NumberReader.read(number)).to.equal("ba mươi triệu");
  });

  it("should read number: 60.000.000", function () {
    const number: number = 60000000;
    expect(NumberReader.read(number)).to.equal("sáu mươi triệu");
  });

  it("should read number: 100.000.000", function () {
    const number: number = 100000000;
    expect(NumberReader.read(number)).to.equal("một trăm triệu");
  });

  it("should read number: 500.000.000", function () {
    const number: number = 500000000;
    expect(NumberReader.read(number)).to.equal("năm trăm triệu");
  });

  it("should read number: 1.000.000.000", function () {
    const number: number = 1000000000;
    expect(NumberReader.read(number)).to.equal("một tỉ");
  });

  it("should read number: 1.100.000.000", function () {
    const number: number = 1100000000;
    expect(NumberReader.read(number)).to.equal("một tỉ một trăm triệu");
  });

  it("should read number: 2.000.000.000", function () {
    const number: number = 2000000000;
    expect(NumberReader.read(number)).to.equal("hai tỉ");
  });
});
