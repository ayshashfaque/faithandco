import { db } from './src/firebase.js';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

const seedProperties = async () => {
    const listings = [
        {
            title: "Southall Institutional Asset",
            location: "Southall Corridor, UB1",
            monthlyRent: "3450",
            salePrice: "850,000",
            isForSale: false,
            isFeatured: true,
            status: "Compliance Verified",
            description: "Institutional social care asset with high-tier infrastructure compliance.",
            imageUrls: ["/origin.jpeg"],
            lat: "51.5127",
            lng: "-0.3777",
            createdAt: serverTimestamp()
        },
        {
            title: "Hayes Specialized Infrastructure",
            location: "Hayes Strategic Zone, UB3",
            monthlyRent: "2950",
            salePrice: "725,000",
            isForSale: false,
            isFeatured: true,
            status: "Institutional Standard",
            description: "Specialized residential infrastructure for high-specification living.",
            imageUrls: ["/origin.jpeg"],
            lat: "51.5200",
            lng: "-0.4200",
            createdAt: serverTimestamp()
        },
        {
            title: "Ealing CQC Facility",
            location: "Ealing West Corridor, W5",
            monthlyRent: "4200",
            salePrice: "1,200,000",
            isForSale: false,
            isFeatured: true,
            status: "Strategic Asset",
            description: "CQC-compliant facility bridging property investment and social care.",
            imageUrls: ["/origin.jpeg"],
            lat: "51.5130",
            lng: "-0.3015",
            createdAt: serverTimestamp()
        }
    ];

    try {
        console.log("INITIALISING SEED PROTOCOL...");
        for (const prop of listings) {
            const q = query(collection(db, "properties"), where("title", "==", prop.title));
            const existing = await getDocs(q);
            if (existing.empty) {
                await addDoc(collection(db, "properties"), prop);
                console.log(`DEployed: ${prop.title}`);
            } else {
                console.log(`SKIPPING: ${prop.title} (Already Exists)`);
            }
        }
        console.log("SEEDING SEQUENCE COMPLETE.");
    } catch (e) {
        console.error("SEEDING_FAILURE:", e);
    }
};

seedProperties();
