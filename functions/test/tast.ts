import {firebaseGet, firebaseSet, firestoreGet, firestoreSet} from '../src';
import {assert} from 'chai';

// (async () => {
//     await FireTestSet();
//     await FireTestget();
// })()
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

describe('Test Firestore', () => {
	it('test 1', async () => {
		const id = await firestoreSet();
		if (!id) {
			throw new Error('ZE ZEVEL');
		}
		console.log(id);

		const worker = await firestoreGet(id);
		console.log(worker);
		assert.deepEqual(worker, {name: 'Alon'});
		// expect(workers).to.deep.equal({name: 'Alon'});
		console.log('completed!');
	});
});

describe('Test Firebase', () => {
	it('test 1', async () => {
		const path = '/pah/zevel';
		await firebaseSet(path);

		const worker = await firebaseGet(path);
		console.log(worker);
		assert.deepEqual(worker, {name: 'Alon'} as any);
		// expect(workers).to.deep.equal({name: 'Alon'});
		console.log('completed!');
	});
});
