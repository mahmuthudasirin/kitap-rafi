import BookCard from './BookCard'

export default function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/60 p-10 text-center text-stone-500">
        Rafta henüz kitap yok. Yukarıdan ekleyerek koleksiyonunu başlat.
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}
