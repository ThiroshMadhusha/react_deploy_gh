import React from "react";
import { FaPlus } from "react-icons/fa";
import "../assets/addItem.css";

import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>

      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Items"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={()=>inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
