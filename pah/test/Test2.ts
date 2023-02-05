import {FireTestget, FireTestSet} from "../../functions/src";
import {expect} from "chai";

describe("Upload to Firebase and Check", () => {
    it("test 1", async () => {
        await FireTestSet();
        const workers = await FireTestget();
        expect(workers).to.have.property("name", "Alon");
    });
});