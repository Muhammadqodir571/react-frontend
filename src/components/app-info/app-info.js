import './app-info.css'
const AppInfo = ({allMoviesCount,favouriteCount}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase' >Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>sevimli kinolar: {favouriteCount}</p>
    </div>
  )
}

export default AppInfo