//
//
// import {FireTestget, FireTestSet} from "../src";
// import {expect} from "chai";
// console.log("in test before async");
// (async() => {
//   await FireTestSet();
//   const workers = await FireTestget();
//   console.log("in test in async");
//   expect(workers).to.have.property("name", "Alon");
// })()
//
// console.log("in test after async");

// const admin = require('firebase-admin');
// const functions = require('../index.js');
// const test12 = require('firebase-functions-test')();
//
// describe('Firebase Cloud Functions Tests', () => {
//   it('FireTestSet and FireTestGet', async () => {
//     const wrappedSet = test12.wrap(functions.FireTestSet);
//     const wrappedGet = test12.wrap(functions.FireTestGet);
//     await wrappedSet();
//     const result = await wrappedGet();
//     expect(result).toEqual({ name: "Alon" });
//   });
// });


import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseFunctionsTest from 'firebase-functions-test';

const test = firebaseFunctionsTest();
jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  firestore: () => ({
    collection: jest.fn(path => ({
      doc: jest.fn(() => ({
        get: jest.fn()
      }))
    }))
  })
}));

describe('FireTest', () => {
  it('checks if worker is added and retrieved correctly', async () => {
    const wrappedSet = test.wrap(functions.FireTestSet);
    const data = { name: 'Alon', worker: {} };
    await wrappedSet({
      data: () => (data),
      ref: {
        set: jest.fn()
      }
    });

    const wrappedGet = test.wrap(functions.FireTestGet);
    const mockQueryResponse = jest.fn();
    mockQueryResponse.mockResolvedValue({ name: 'Alon' });
    jest.spyOn(admin.firestore().collection(), 'doc').mockReturnValue({ get: mockQueryResponse });
    const result = await wrappedGet();
    expect(result).toEqual({ name: 'Alon' });
  });
});
