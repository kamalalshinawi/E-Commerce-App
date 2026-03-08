import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"


export const getProductsData = async() =>{
    try {
        const querySnapShot = await getDocs(collection(db,"products"))
        const list = []
        querySnapShot.forEach((doc)=> {
            list.push(doc.data())
        })

        return list 
    } catch (error) {
        console.error("Error fetch Data",error)
    }
}