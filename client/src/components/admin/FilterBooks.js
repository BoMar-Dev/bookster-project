import { UserPage } from "../../pages/UserPage"

const FilterBooks = () => {
  return (
    <div className="admin-books-container">
        <div>
            <button>Add new Books</button>
        </div>
        < UserPage />
        <section>
            <h2>Action</h2>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </section>
    </div>
  )
}
export default FilterBooks