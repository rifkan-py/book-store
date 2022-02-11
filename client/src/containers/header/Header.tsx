import { Banner, LinksList, Navbar } from '../../components'

const Header: React.FC = () => {
  return (
    <div>
      <LinksList />
      <Navbar />
      <Banner />
    </div>
  )
}

export default Header
