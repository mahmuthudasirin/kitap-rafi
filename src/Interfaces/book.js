/**
 * Kitap kaydı (LocalStorage).
 *
 * @typedef {Object} Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} note
 * @property {string} createdAt
 */

export const BOOK_STORAGE_KEY = 'kitap-rafi'

/** @returns {Book} */
export function createBook({ title, author, note }) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    author: author.trim(),
    note: note.trim(),
    createdAt: new Date().toISOString(),
  }
}
