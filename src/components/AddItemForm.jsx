import { useForm } from "../hooks/useForm";

export function AddItemForm({ onAddItem }) {
  const { form, onInputChange, onResetForm } = useForm({
    quantity: 1,
    item: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: crypto.randomUUID(), packed: false, ...form });
    onResetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title heading-2">
        ¿Qué llevarás a tu viaje? <span>✍️</span>
      </h2>
      <select
        className="form__select"
        name="quantity"
        value={form.quantity}
        onChange={onInputChange}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <input
        className="form__input"
        type="text"
        name="item"
        value={form.item}
        placeholder="Passport, t-shirts, socks..."
        onChange={onInputChange}
      />
      <button className="btn btn--add" type="submit">
        Add
      </button>
    </form>
  );
}
