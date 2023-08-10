import React, { useEffect, useState } from "react";

export default function Child({ getitem }) {
  const [item, setitem] = useState([]);
  useEffect(() => {
    setitem(getitem());
  }, [getitem]);
  return (
    <div>
      {item &&
        item.map((items) => {
          return <div key={items}>{items}</div>;
        })}
    </div>
  );
}
