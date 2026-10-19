export default function BookCard({ book, onEdit, onDelete }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-stone-900">{book.title}</h2>
        <p className="mt-1 text-sm text-amber-800">{book.author}</p>
        {book.note ? (
          <p className="mt-3 text-sm leading-relaxed text-stone-600">{book.note}</p>
        ) : null}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onEdit(book)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-50"
        >
          Düzenle
        </button>
        <button
          type="button"
          onClick={() => onDelete(book.id)}
          className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
        >
          Sil
        </button>
      </div>
    </article>
  )
}
