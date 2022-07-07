import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import '../assets/listItem.css'

const ListKey = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {/* All are delete empty message create with this length code */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            // add key values
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                // check box is true, label text is cut
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>

              {/* Delete React Icon */}
              <FaTrashAlt
                // Delete items icon function
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List Is Empty</p>
      )}
    </main>
  );
};

export default ListKey;
