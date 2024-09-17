import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import './app.css'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from "../movies-add-form/movies-add-form"
import { Component } from "react"
import { v4 as uuidv4 } from 'uuid';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : [
        { name : 'Empiere of osman', viewers: 666, favourite: false, like:false, id:1},
        {name : 'Omar ibn hattob', viewers: 1000, favourite:false,like:false, id:2},
        {name : 'Ertugurl' ,viewers: 4440, favourite:false, like:false, id:3},
        { name : 'olamga nur sochgan oy', viewers: 6166, favourite:false,like:false, id:4},
        {name :'Sayfiddin qutuz', viewers: 10100, favourite:false,like:false, id:5},
        {name : 'Abdulhamid II' ,viewers: 44140, favourite:false,like:false, id:6},
        
      ], 
      term:'',
      filter:''

    }
  }

  //  onDelete=(id)=>{
  //   this.setState(({data})=>{
  //     // const index = data.findIndex(c=>c.id ===id)
  //     // data.splice(index,1)//mutable
  //     const newArr = data.filter(c => c.id !==id)// imutable
  //     return{
  //       data:newArr
  //     }
  //   } )
  // }
  onDelete = id =>{
    this.setState(({data})=>({
      data:data.filter( a => a.id !== id)
    }))}
     
    addFrom = item =>{
      const newItem = {name : item.name, viewers:item.views, id: uuidv4(), favourite:false , like:false}
      this.setState(({data})=>({
        data: [...data, newItem]
      }))
    }
    onTogglePorp = (id, prop)=>{
      this.setState(({data})=>({
        data: data.map(item =>{
          if(item.id === id ){
            return{...item, [prop]:!item[prop]}
          }return item
        })
        
      }))
    }
    searchTerm = (arr, term)=>{
      if(term.length === 0){
        return arr
      }
      return arr.filter(item =>item.name.toLowerCase().indexOf(term) > -1)

    }
    filterHandler = (arr, filter)=>{
      switch (filter) {
        case 'populer':
          return arr.filter(c => c.like)
        case 'mostViewers':
          return arr.filter(c => c.viewers > 500)  
        default:
          return arr
          
      }
    }
    updateTermHandler = term =>{ this.setState({term})}
    updateFilterHandler = (filter)=>{ this.setState({filter})}
    render(){
    const {data, term , filter} = this.state
    const allMoviesCount = data.length
    const favouriteCount = data.filter(a => a.favourite).length
    const viselbaleData = this.filterHandler(this.searchTerm(data, term),filter)
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMoviesCount} favouriteCount = {favouriteCount}/>
          <div className="search-panel">
          <SearchPanel updateTermHandler = {this.updateTermHandler}/>
            <AppFilter filter= {filter} updateFilterHandler={this.updateFilterHandler}/>
            
          </div>
          <MovieList onTogglePorp = {this.onTogglePorp} data={viselbaleData} onDelete={this.onDelete}/>
          <MoviesAddForm  addFrom={this.addFrom}/>
        </div>
      </div>
    )
  }

  }

export default App


