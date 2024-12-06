# Firebase Snapshot Data Race Condition

This repository demonstrates a common issue when working with Firebase Firestore: accessing properties of a document snapshot before the data has fully loaded. This can lead to unexpected behavior, most commonly encountering `undefined` values.

The `bug.js` file shows the problematic code, while `bugSolution.js` illustrates the correct approach using async/await to handle the asynchronous nature of data retrieval.

## Bug
The bug stems from trying to access data from a Firestore snapshot immediately after initiating a `get()` operation without waiting for the promise to resolve.  This race condition results in accessing the snapshot before it contains any data, leading to errors or undefined values.

## Solution
The solution elegantly solves this problem using async/await.  The code now waits for the promise to resolve before accessing any snapshot data, ensuring that the data is available and preventing errors.