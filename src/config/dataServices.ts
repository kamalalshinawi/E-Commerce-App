import { collection, getDocs, doc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const getProductsData = async () => {
  try {
    const querySnapShot = await getDocs(collection(db, "products"));
    const list = querySnapShot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    return list;
  } catch (error) {
    console.error("Error fetch Data", error);
    return [];
  }
};

export const fetchUserOrders = async (uid?: string) => {
  try {
    const userId = uid || auth.currentUser?.uid;

    if (!userId) {
      return [];
    }

    const userOrdersRef = collection(
      doc(db, "users", userId),
      "orders",
    );

    const querySnapShot = await getDocs(userOrdersRef);

    const orderList = querySnapShot.docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });

    return orderList;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
