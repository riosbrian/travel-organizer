export function Item({ item, onMarkPacked, onDeleteItem }) {
  return (
    <li className="item">
      <input
        className="item__check"
        type="checkbox"
        name=""
        onChange={() => onMarkPacked(item.id)}
      />
      <p>{`${item.quantity}: ${item.item}`}</p>
      <button className="btn btn--del" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
