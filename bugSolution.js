The solution involves using `async/await` to ensure that the code waits for the promise returned by `get()` to resolve before accessing the snapshot data:

```javascript
async function getDocumentData(docRef) {
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log("Document data:", data);
      return data;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
}

// Example Usage
documentRef.get().then(doc => {
  if (doc.exists) {
    console.log("Data: ", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch(err => console.error("Error getting data:", err));
```