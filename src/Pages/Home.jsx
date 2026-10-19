import { useEffect, useState } from 'react'
import BookForm from '../Components/BookForm'
import BookList from '../Components/BookList'
import { BOOK_STORAGE_KEY, createBook } from '../Interfaces/book'

const emptyForm = { title: '', author: '', note: '' }

function loadBooks() {
  try {
    const raw = localStorage.getItem(BOOK_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function Home() {
  const [books, setBooks] = useState(loadBooks)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    localStorage.setItem(BOOK_STORAGE_KEY, JSON.stringify(books))
  }, [books])

  function resetForm() {
    setForm(emptyForm)
    setEditingId(null)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.author.trim()) return

    if (editingId) {
      setBooks((prev) =>
        prev.map((book) =>
          book.id === editingId
            ? {
                ...book,
                title: form.title.trim(),
                author: form.author.trim(),
                note: form.note.trim(),
              }
            : book,
        ),
      )
    } else {
      setBooks((prev) => [createBook(form), ...prev])
    }

    resetForm()
  }

  function handleEdit(book) {
    setEditingId(book.id)
    setForm({ title: book.title, author: book.author, note: book.note })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDelete(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id))
    if (editingId === id) resetForm()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <p className="text-sm font-medium uppercase tracking-wide text-amber-800">
          Mini koleksiyon
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
          Kitap Rafı
        </h1>
        <p className="mt-2 text-stone-600">
          Okuduğun veya okumak istediğin kitapları ekle, listele, güncelle veya sil.
          Kayıtlar tarayıcıda LocalStorage’da tutulur.
        </p>
        <p className="mt-3 text-sm text-amber-900">{books.length} kitap rafta</p>
      </header>

      <section className="mb-8 rounded-2xl border border-amber-200 bg-white/80 p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-stone-700">
          {editingId ? 'Kitabı güncelle' : 'Yeni kitap ekle'}
        </h2>
        <BookForm
          values={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          submitLabel={editingId ? 'Kaydet' : 'Ekle'}
          onCancel={editingId ? resetForm : undefined}
        />
      </section>

      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}
