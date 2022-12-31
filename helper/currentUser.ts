import {  db } from "../lib/firebase";
import { useEffect } from "react";
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";



// export const currentUserInfo = async(auth:any) => {
//   const user = await auth.currentUser;
//   console.log("helper",user);
//   return user
// };
// export const currentUserData = async () => {
// 	const querySnapshot = await getDocs(collection(db, "invoice"));
// 	querySnapshot.forEach((doc) => {
// 		return doc.data;
// 	});
// };
