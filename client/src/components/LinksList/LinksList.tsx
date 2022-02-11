import { FaUserCircle } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'
import './linkslist.css'

const LinksList: React.FC = () => {
  return (
    <div className="linkslist">
      <div className="left">
        <a href="#about">About</a>
        <a href="#about">Contact Us</a>
        <a href="#about">Services</a>
      </div>
      <div className="right">
        <a href="#currency" className="p-1 text-xl">
          <HiCurrencyDollar />
        </a>
        <a href="#login" className="p-1 text-lg">
          <FaUserCircle />
        </a>
      </div>
    </div>
  )
}

export default LinksList
