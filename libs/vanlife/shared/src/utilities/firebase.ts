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
  apiKey: 'AIzaSyBgpEf5hPrQjys6X3cl5DdQQ_tUoCY4-2Y',
  authDomain: 'ggodoi-vanlife.firebaseapp.com',
  projectId: 'ggodoi-vanlife',
  storageBucket: 'ggodoi-vanlife.appspot.com',
  messagingSenderId: '101964794527',
  appId: '1:101964794527:web:a634fdd8e9b6532b7df0aa',
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
