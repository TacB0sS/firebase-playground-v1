"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const chai_1 = require("chai");
console.log("in test before async");
(async () => {
    await (0, src_1.FireTestSet)();
    const workers = await (0, src_1.FireTestget)();
    console.log("in test in async");
    (0, chai_1.expect)(workers).to.have.property("name", "Alon");
})();
console.log("in test after async");
//# sourceMappingURL=test.js.map