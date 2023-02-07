import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


console.log('index.ts over intial', functions.config().firebase);
admin.initializeApp(functions.config().firebase);
console.log('index.ts under intial');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   console.log("index.ts in helloworld");
//   response.set("Access-Control-Allow-Origin", "*");
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send({name: "Hello from Firebase!"});
// });

// eslint-disable-next-line max-len
// export const getQuaiWorkers= functions.https.onRequest(async (request, response) => {
//   console.log("index.ts in getwork");
//   response.set("Access-Control-Allow-Origin", "*");
//   const db = admin.firestore();
//   const docData = await db.collection("Database").doc("Workers").get();
//   const workers= docData.data();
//   console.log(workers);
//   response.send({workers});
// });

// eslint-disable-next-line max-len
// export const setQuaiWorkers= functions.https.onRequest(async (request, response) => {
//   console.log("index.ts in setwork");
//   response.set("Access-Control-Allow-Origin", "*");
//   console.log("in back");
//   const db = admin.firestore();
//   const worker = {
//     name: "a",
//     favFood: "a",
//   };
//   console.log("index.ts in middle");
//   const collectionReference = db.collection("quaiWorkers");
//   const QuaiWorkersRef = await collectionReference.get();
//   if (QuaiWorkersRef.empty) {
//     console.log("no list");
//     const workersList=[];
//     console.log("1");
//     workersList.push(worker);
//     console.log("2");
//     console.log(workersList);
//     await collectionReference.add(worker);
//   } else {
//     console.log("yes list");
//   }
// });

// eslint-disable-next-line require-jsdoc
export async function firestoreSet() {
	const db = admin.firestore();
	const worker = {
		name: 'Alon',
	};

	const collectionReference = db.collection('quaiWorkers');
	const QuaiWorkersRef = await collectionReference.get();
	if (QuaiWorkersRef.empty)
		return (await collectionReference.add(worker)).id;

	return undefined;
}

export async function firestoreGet(id: string) {
	const db = admin.firestore();
	const docData = await db.collection('quaiWorkers').doc(id).get();
	return docData.data();
}

export async function firebaseSet(path: string) {
	const db = admin.database();
	const worker = {
		name: 'Alon',
	};

	await db.ref(path).set(worker);

	return undefined;
}

export async function firebaseGet(path: string) {
	const db = admin.database();
	return await db.ref(path).get();
}


