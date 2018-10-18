import { expect } from 'chai'
import Billion from "../../Billion";

describe("Thousand", function() {
  it("should read number: 000.000.100.000", function() {
    const billion = new Billion("000");
    expect(billion.read()).to.equal("");
  });

  it("should read number: 100.000.100.000", function() {
    const billion = new Billion("100");
    expect(billion.read()).to.equal("một trăm tỉ");
  });
});
