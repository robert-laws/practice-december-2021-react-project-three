import { useState, useEffect, useReducer } from 'react';
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  deleteDoc,
  Timestamp,
} from 'firebase/firestore';

const db = getFirestore();

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {
        document: null,
        isPending: true,
        error: null,
        success: false,
      };

    case 'ERROR':
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };

    case 'ADD_DOCUMENT':
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };

    case 'DELETE_DOCUMENT':
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export const useFirestore = (col) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const colRef = collection(db, col);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const myDoc = { ...doc, createdAt: Timestamp.now() };
      const newDocument = await addDoc(colRef, myDoc);
      dispatchIfNotCancelled({ type: 'ADD_DOCUMENT', payload: newDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // delete document
  const deleteDocument = async (id) => {
    const docRef = doc(db, col, id);
    try {
      await deleteDoc(docRef);
      dispatchIfNotCancelled({
        type: 'DELETE_DOCUMENT',
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // cleanup
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
