import {firestoreGet, firestoreSet} from "../../functions/src";
import {expect} from "chai";

describe("Upload to Firebase and Check", () => {
    it("test 1", async () => {
        await firestoreSet();
        const workers = await firestoreGet();
        expect(workers).to.have.property("name", "Alon");
    });
});