import { useState } from "react";

// { items: [], heading: string}
//use interface to desribe shape of object

/*
Props:
Input passed to a component, immutable

State:
Data managed by a comonent
mutable, cause re-render
*/

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //onClick
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  //need paren to break jsx into multiple lines
  //cannot return multiple elements in react
  //use Fragment to not have additional element in DOM
  //empty angle brackets implicitly suggests use of fragments
  //Hook: tap in built in react features useState
  //[variable (selectedIndex), updater function]
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //Event Handler
  //type annotation in ts
  //const handleClick= (event: MouseEvent)=> console.log(event);

  //error message syntax
  //const getMessage = () => {
  //  items.length == 0 ? <p>No item found</p> : null;
  //}

  //convert types with =>
  //usually have key for li as key=item.id
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
