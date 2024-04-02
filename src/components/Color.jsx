import { useParams } from 'react-router-dom'

const Color = () => {
  const {color} = useParams();
  console.log(color);
  document.querySelector('body').style.backgroundColor=`${color}`;
  return (
    <h1>{color}</h1>
  )
}

export default Color