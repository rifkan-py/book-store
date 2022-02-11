import { BiCategoryAlt } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <h3>Book Store</h3>
      </div>
      <BiCategoryAlt className="store-icon" />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search ... Ex. Title, Author name, Category"
        />
      </div>
      <div className="add-to-cart">
        <span>7</span>
        <BsCart4 className="store-icon" />
      </div>
    </div>
  )
}

export default Navbar
