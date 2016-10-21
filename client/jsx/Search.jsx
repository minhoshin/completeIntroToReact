import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends React.Component {

   constructor (props) {
       super(props)
       this.state = {
           searchTerm: ''
       }
       this.handleSearchTermChange=this.handleSearchTermChange.bind(this)
   }

   handleSearchTermChange(e) {
       this.setState({ searchTerm : e.target.value })
   }

   render() {
       return (
           <div className='container'>
               <Header showSearch handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} />
               <div className='shows'>
                   { this.props.route.shows
                       .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                       .map((show, index) => (
                       <ShowCard {...show} key={index} id={index} />
                   ))}
               </div>
           </div>
       )
   }

}

module.exports = Search