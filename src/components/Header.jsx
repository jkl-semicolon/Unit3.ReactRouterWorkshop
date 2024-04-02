import { Link } from 'react-router-dom'

const Header = () => {
  const rainbow = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet'];
  return (
    <>
      <Link to='/'><button>Home</button></Link>
      {rainbow.map((color)=>{
        return <Link to={`/${color.toLowerCase()}`}><button>{color}</button></Link>
      })}
    </>
  )
}

export default Header