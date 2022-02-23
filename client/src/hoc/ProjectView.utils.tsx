import { Fragment, useState } from "react";

let counter = 0;
const generateArray = (totalRating: any, rating: any) => {
  return Array.from(new Array(totalRating), (_, index) => ({
    checked: index + 1 <= rating,
    id: ++counter,
  }));
};

export const AppRating = ({
  name,
  totalRating,
  rating,
  disabled = true,
}: any) => {
  const [items, setItems] = useState(
    generateArray.bind(this, totalRating, rating)
  );

  const onChangeInput = (e: any) => {
    const { id } = e.target;

    setItems((data: any) => {
      const clonedData = [...data];
      return clonedData.map((item: any) => {
        const clonedItem = {
          ...item,
        };
        if (clonedItem.id === parseInt(id)) {
          clonedItem.checked = !clonedItem.checked;
        }

        return clonedItem;
      });
    });
  };

  const allCheckbox = items.map((item: any, index) => {
    return (
      <Fragment key={`${name}-${item.id}`}>
        <input
          id={item.id}
          type="checkbox"
          checked={item.checked}
          onChange={onChangeInput}
          disabled={disabled}
        />
        <label htmlFor={item.id}></label>
      </Fragment>
    );
  });

  return <div className="right">{allCheckbox}</div>;
};
