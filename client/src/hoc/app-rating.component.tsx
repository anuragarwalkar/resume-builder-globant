import {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

export const generateArray = (totalRating: any, rating: any) => {
  return Array.from(new Array(totalRating), (_, index) => ({
    checked: index + 1 <= rating,
    id: uuidv4(),
  }));
};

export const AppRating = forwardRef(
  (
    { name, totalRating, rating, disabled = true, onChangeRating }: any,
    ref
  ) => {
    const [items, setItems] = useState(generateArray(totalRating, rating));

    useImperativeHandle(ref, () => ({
      resetItems: () => {
        setItems((data: any) => {
          const clonedData = [...data];
          return clonedData.map((item: any) => {
            const clonedItem = {
              ...item,
            };
            clonedItem.checked = false;

            return clonedItem;
          });
        });
      },
    }));

    useEffect(() => {
      if (onChangeRating) {
        const total = items.reduce((a, b) => {
          if (b.checked) {
            a++;
          }
          return a;
        }, 0);
        onChangeRating(total);
      }
    }, [items, onChangeRating]);

    const onChangeInput = (index: any, e: any) => {
      const { id } = e.target;

      setItems((data: any) => {
        const clonedData = [...data];
        return clonedData.map((item: any, inIndex: number) => {
          const clonedItem = {
            ...item,
          };

          clonedItem.checked = inIndex <= index;

          return clonedItem;
        });
      });
    };

    const allCheckbox = items.map((item: any, index: number) => {
      return (
        <Fragment key={`${name}-${item.id}`}>
          <input
            id={item.id}
            type="checkbox"
            checked={item.checked}
            onChange={onChangeInput.bind(null, index)}
            disabled={disabled}
          />
          <label htmlFor={item.id}></label>
        </Fragment>
      );
    });

    return <div className="right">{allCheckbox}</div>;
  }
);
