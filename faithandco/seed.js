import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYe9TeT5BDQfHd3C4B-gT5FS0_N5D6eB8",
  authDomain: "faith-75a20.firebaseapp.com",
  projectId: "faith-75a20",
  storageBucket: "faith-75a20.firebasestorage.app",
  messagingSenderId: "1015834155014",
  appId: "1:1015834155014:web:974314046c33c4662ecb87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const demoListings = [
  {
    title: "Executive HMO Asset",
    location: "Southall, West London",
    description: "Fully licensed 6-bedroom professional HMO. Institutional grade infrastructure featuring high-speed connectivity, bespoke communal living spaces, and proximity to Southall Station (Elizabeth Line). Stabilized yield with 100% occupancy history.",
    isForSale: true,
    isForRent: false,
    salePrice: "875,000",
    monthlyRent: "",
    beds: "6",
    baths: "4",
    propertyType: "HMO Investment",
    parking: "Driveway",
    status: "Available",
    imageUrls: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200"],
    lat: 51.5127,
    lng: -0.3763,
    isFeatured: true,
    isHidden: false
  },
  {
    title: "Social Housing Block",
    location: "Hayes, UB3",
    description: "Purpose-built block of 4 self-contained flats secured by a 10-year FRI lease with a leading CQC provider. Guaranteed rent scheme in place. Strategic UB3 location with direct access to local infrastructure hubs.",
    isForSale: true,
    isForRent: false,
    salePrice: "1,250,000",
    monthlyRent: "",
    beds: "8",
    baths: "4",
    propertyType: "Social Housing Asset",
    parking: "Secure Gated",
    status: "Available",
    imageUrls: ["https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200"],
    lat: 51.5128,
    lng: -0.4214,
    isFeatured: false,
    isHidden: false
  },
  {
    title: "Premium Serviced Apartment",
    location: "Ealing Broadway",
    description: "High-spec modern apartment optimized for corporate let and short-stay aviation crews. Features open-plan living, private balcony, and hotel-standard concierge services. High yield potential via dynamic pricing engine.",
    isForSale: false,
    isForRent: true,
    salePrice: "",
    monthlyRent: "3,200",
    beds: "2",
    baths: "2",
    propertyType: "Serviced Accommodation",
    parking: "Underground",
    status: "Available",
    imageUrls: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200"],
    lat: 51.5147,
    lng: -0.3015,
    isFeatured: true,
    isHidden: false
  }
];

async function seed() {
  console.log("Starting Cloud Data Cleanup & Broadcast...");
  try {
    // Phase 1: Clear existing orphans
    const snapshot = await getDocs(collection(db, "properties"));
    console.log(`Found ${snapshot.size} legacy documents. Purging...`);
    
    for (const d of snapshot.docs) {
      await deleteDoc(doc(db, "properties", d.id));
    }
    console.log("Cleanup Complete.");

    // Phase 2: Broadcast flagship listings
    for (const listing of demoListings) {
      await addDoc(collection(db, "properties"), {
        ...listing,
        createdAt: serverTimestamp()
      });
      console.log(`Successfully Broadcasted: ${listing.title}`);
    }
    console.log("Cloud Seeding Complete. 3 Assets Live.");
    process.exit(0);
  } catch (error) {
    console.error("Broadcast Failed:", error);
    process.exit(1);
  }
}

seed();
