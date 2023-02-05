import {FireTestget, FireTestSet} from "../src";
import {assert} from "chai";

// (async () => {
//     await FireTestSet();
//     await FireTestget();
// })()

describe("Upload to Firebase and Check", () => {
  it("test 1", async () => {
    const id = await FireTestSet();
    if (!id) {
      throw new Error("ZE ZEVEL");
    }
    const workers = await FireTestget(id);
    console.log(workers);
    console.log(workers);
    console.log(workers);
    assert.deepEqual(workers, {name: "Alon"});
    // expect(workers).to.deep.equal({name: 'Alon'});
    console.log(workers);
  });
});
