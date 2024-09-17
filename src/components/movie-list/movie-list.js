import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data,onDelete, onTogglePorp }) => {
	return (
	<ul className='movie-list'>
		{data.map((item ) =>(
			<MovieListItem 
			key ={item.id}  
			name={item.name} 
			viewers={item.viewers} 
			favourite={item.favourite} 
			like = {item.like}
			onDelete={()=>onDelete(item.id)}  
			onTogglePorp = {(e)=>onTogglePorp(item.id, e.currentTarget.getAttribute('data-toggle')
				)}
			
			/>
	))}
	</ul>


)		
}

export default MovieList
