"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const chai_1 = require("chai");
describe("Upload to Firebase and Check", () => {
    it("test 1", async () => {
        await (0, src_1.FireTestSet)();
        const workers = await (0, src_1.FireTestget)();
        (0, chai_1.expect)(workers).to.have.property("name", "Alon");
    });
});
//# sourceMappingURL=Test2.js.map