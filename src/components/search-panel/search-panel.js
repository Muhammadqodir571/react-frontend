import {Component} from 'react'
  class SearchPanel extends Component{
    constructor(props){
      super(props)
      this.state ={
        term:''
      }
    }
    updateTermHandler = e =>{
      const term = e.target.value.toLowerCase()
      this.setState({term})
      this.props.updateTermHandler(term)
    }

    render(){

      const typeText = 'text'
      const cllasName = "form-control search-input"
      const searchPlacholder = "kinolarni qidirish"
      return  <input type={typeText} className={cllasName} placeholder={searchPlacholder}  onChange={ this.updateTermHandler} value={this.state.term} />
    }
}

export default SearchPanel