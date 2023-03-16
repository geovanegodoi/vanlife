import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgrABdgI7v5knf-j0lgz8fxnOM3kGorNU',
  authDomain: 'van-life-3ffdc.firebaseapp.com',
  projectId: 'van-life-3ffdc',
  storageBucket: 'van-life-3ffdc.appspot.com',
  messagingSenderId: '1060412556710',
  appId: '1:1060412556710:web:296ff6ea49eac207d9bb67',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const VansCollection = collection(db, 'vans');
const ReviewsCollection = collection(db, 'reviews');

export async function getAllVans() {
  const snapshot = await getDocs(VansCollection);
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}

export async function getVan(id: string) {
  const docRef = doc(db, 'vans', id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans() {
  const queryValue = query(VansCollection, where('hostId', '==', '123'));
  const snapshot = await getDocs(queryValue);
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}

export async function getHostReviews() {
  const snapshot = await getDocs(ReviewsCollection);
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}
