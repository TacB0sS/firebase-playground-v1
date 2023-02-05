"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireTestget = exports.FireTestSet = exports.setQuaiWorkers = exports.getQuaiWorkers = exports.helloWorld = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
console.log("index.ts over intial");
admin.initializeApp(functions.config().firebase);
console.log("index.ts under intial");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log("index.ts in helloworld");
    response.set("Access-Control-Allow-Origin", "*");
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send({ name: "Hello from Firebase!" });
});
// eslint-disable-next-line max-len
exports.getQuaiWorkers = functions.https.onRequest(async (request, response) => {
    console.log("index.ts in getwork");
    response.set("Access-Control-Allow-Origin", "*");
    const db = admin.firestore();
    const docData = await db.collection("Database").doc("Workers").get();
    const workers = docData.data();
    console.log(workers);
    response.send({ workers });
});
// eslint-disable-next-line max-len
exports.setQuaiWorkers = functions.https.onRequest(async (request, response) => {
    console.log("index.ts in setwork");
    response.set("Access-Control-Allow-Origin", "*");
    console.log("in back");
    const db = admin.firestore();
    const worker = {
        name: "a",
        favFood: "a",
    };
    console.log("index.ts in middle");
    const collectionReference = db.collection("quaiWorkers");
    const QuaiWorkersRef = await collectionReference.get();
    if (QuaiWorkersRef.empty) {
        console.log("no list");
        const workersList = [];
        console.log("1");
        workersList.push(worker);
        console.log("2");
        console.log(workersList);
        await collectionReference.add(worker);
    }
    else {
        console.log("yes list");
    }
});
// eslint-disable-next-line require-jsdoc
async function FireTestSet() {
    const db = admin.firestore();
    const worker = {
        name: "Alon",
    };
    const collectionReference = db.collection("quaiWorkers");
    const QuaiWorkersRef = await collectionReference.get();
    if (QuaiWorkersRef.empty) {
        const workersList = [];
        workersList.push(worker);
        console.log(workersList);
        await collectionReference.add(worker);
    }
    else {
        console.log("yes list");
    }
}
exports.FireTestSet = FireTestSet;
async function FireTestget() {
    const db = admin.firestore();
    const docData = await db.collection("Database").doc("Workers").get();
    const workers = docData.data();
    return workers;
}
exports.FireTestget = FireTestget;
//# sourceMappingURL=index.js.map