
import Navbar from './componant./CartoonList./Navbar'

const Navbar = () => {

  const [search, setSearch] = useState("")

  return(
    <div className='topSection'>
      <div className="topDiv">
        <div className="searchDiv">
          <BiSearch className='small-icon' />
          <input 
          type="text" 
          placeholder='Search' 
          onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
    </div>
  )
  }
    
export default Navbar;
