import { Item } from "./Item";

export function PackingList({ itemList, onMarkPacked, onDeleteItem }) {
  return (
    <section className="packing-list">
      <ul className="packing-list__list wrapper">
        {itemList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onMarkPacked={onMarkPacked}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </section>
  );
}
