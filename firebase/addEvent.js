import { storage } from "./config";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import {
  ref,
  getDownloadURL,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

export async function addEventToFirebase(
  title,
  description,
  startTime,
  endTime,
  link,
  imageFile,
) {
  if (title === "" || description === "") {
    console.log("Please provide a valid title and description");
    return;
  }
  if (startTime >= endTime || !startTime) {
    console.log("Please provide a valid time");
    return;
  }

  const eventsCollection = collection(firestore, "events");

  try {
    // Add image to the firestore
    const storageRef = ref(storage, `eventImages/${title}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    //get the image url
    const imageUrl = await getDownloadURL(
      ref(storage, `eventImages/${title}_${imageFile.name}`),
    );

    //add the detail to the database
    const docRef = await addDoc(eventsCollection, {
      title: title,
      description: description,
      startTime: startTime,
      endTime: endTime,
      link: link,
      thumbnail: imageUrl,
      approval: "pending",
    });

    // Upload image to Firebase Storage
    console.log("event added successfully");
    // Show success message
    // window.alert("Event added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
    window.alert("Failed to add event. Please try again.");
  }
}
