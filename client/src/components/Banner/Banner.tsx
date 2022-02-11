import './banner.css'

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <h1 className="text-6xl">
        A room without books is like <br /> a body without a soul
      </h1>
      <div className="subscribe">
        <input
          type="text"
          className="py-4 px-6 mt-20 w-2/4 rounded-l outline-none"
          placeholder="Subscribe to Notify the our latest book relese"
        />
        <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-4 px-6 rounded-r transition-all">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Banner
