
import { useState } from 'react';

export const useList = (initialValue = []) => {
  const [items, setItems] = useState(initialValue);
  
  const addItem = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };
  
  const removeItem = indexToRemove => {
    setItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const updateItem = (indexToUpdate, updatedItem) => {
    setItems(prevItems => {
      const updatedList = [...prevItems];
      updatedList[indexToUpdate] = updatedItem;
      return updatedList;
    });
  };

  return {
    items,
    addItem,
    removeItem,
    updateItem
  };
};