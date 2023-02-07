"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const chai_1 = require("chai");
// (async () => {
//     await FireTestSet();
//     await FireTestget();
// })()
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
describe('Test Firestore', () => {
    it('test 1', async () => {
        const id = await (0, src_1.firestoreSet)();
        if (!id) {
            throw new Error('ZE ZEVEL');
        }
        console.log(id);
        const worker = await (0, src_1.firestoreGet)(id);
        console.log(worker);
        chai_1.assert.deepEqual(worker, { name: 'Alon' });
        // expect(workers).to.deep.equal({name: 'Alon'});
        console.log('completed!');
    });
});
describe('Test Firebase', () => {
    it('test 1', async () => {
        const path = '/pah/zevel';
        await (0, src_1.firebaseSet)(path);
        const worker = await (0, src_1.firebaseGet)(path);
        console.log(worker);
        chai_1.assert.deepEqual(worker, { name: 'Alon' });
        // expect(workers).to.deep.equal({name: 'Alon'});
        console.log('completed!');
    });
});
//# sourceMappingURL=tast.js.map