import { useEffect, useState } from "react";
import { AddItemForm } from "./components/AddItemForm";
import { Header } from "./components/Header";
import { PackingList } from "./components/PackingList";
import { Footer } from "./components/Footer";

const saveList = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const getList = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export function App() {
  const [itemList, setItemList] = useState(getList("list") || []);

  const handleAddItem = (item) => {
    setItemList((items) => [...items, item]);
  };

  const handleMarkPacked = (id) => {
    setItemList((itemList) =>
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItemList((itemList) => itemList.filter((item) => item.id !== id));
  };

  useEffect(() => {
    // Guardar en localStorage
    saveList("list", itemList);
  }, [itemList]);

  return (
    <>
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <PackingList
        itemList={itemList}
        onMarkPacked={handleMarkPacked}
        onDeleteItem={handleDeleteItem}
      />
      <Footer itemList={itemList} />
    </>
  );
}
