"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const src_1 = require("../src");
const chai_1 = require("chai");
// (async () => {
//     await FireTestSet();
//     await FireTestget();
// })()
describe("Upload to Firebase and Check", () => {
  it("test 1", async () => {
    const id = await (0, src_1.FireTestSet)();
    if (!id) {
      throw new Error("ZE ZEVEL");
    }
    const workers = await (0, src_1.FireTestget)(id);
    console.log(workers);
    console.log(workers);
    console.log(workers);
    chai_1.assert.deepEqual(workers, {name: "Alon"});
    // expect(workers).to.deep.equal({name: 'Alon'});
    console.log(workers);
  });
});
// # sourceMappingURL=tast.js.map
