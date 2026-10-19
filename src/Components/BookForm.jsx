export default function BookForm({
  values,
  onChange,
  onSubmit,
  submitLabel,
  onCancel,
}) {
  function handleChange(field) {
    return (e) => onChange({ ...values, [field]: e.target.value })
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <input
        type="text"
        value={values.title}
        onChange={handleChange('title')}
        placeholder="Kitap adı"
        className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-stone-800 outline-none ring-amber-500 placeholder:text-stone-400 focus:ring-2 sm:col-span-2"
      />
      <input
        type="text"
        value={values.author}
        onChange={handleChange('author')}
        placeholder="Yazar"
        className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-stone-800 outline-none ring-amber-500 placeholder:text-stone-400 focus:ring-2"
      />
      <input
        type="text"
        value={values.note}
        onChange={handleChange('note')}
        placeholder="Kısa not (isteğe bağlı)"
        className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-stone-800 outline-none ring-amber-500 placeholder:text-stone-400 focus:ring-2"
      />
      <div className="flex gap-2 sm:col-span-2">
        <button
          type="submit"
          className="rounded-xl bg-amber-700 px-5 py-3 font-medium text-white transition hover:bg-amber-800"
        >
          {submitLabel}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-600 hover:bg-stone-50"
          >
            Vazgeç
          </button>
        )}
      </div>
    </form>
  )
}
