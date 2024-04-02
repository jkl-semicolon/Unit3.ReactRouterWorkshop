import { Link } from 'react-router-dom'

const Header = () => {
  const rainbow = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet'];
  return (
    <>
      <Link to='/'><h3>Home</h3></Link>
      {rainbow.map((color)=>{
        return <Link to={`/${color.toLowerCase()}`}>{color}</Link>
      })}
    </>
  )
}

export default Header