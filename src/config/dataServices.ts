import { collection, getDocs, doc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const getProductsData = async () => {
  try {
    const querySnapShot = await getDocs(collection(db, "products"));
    const list = [];
    querySnapShot.forEach((doc) => {
      list.push(doc.data());
    });

    return list;
  } catch (error) {
    console.error("Error fetch Data", error);
  }
};

export const fetchUserOrders = async () => {
  try {
    const userIdFromFirebase = auth.currentUser?.uid;

    const userOrdersRef = collection(
      doc(db, "users", userIdFromFirebase),
      "orders",
    );

    const querySnapShot = await getDocs(userOrdersRef);

    const orderList = querySnapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return orderList;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
