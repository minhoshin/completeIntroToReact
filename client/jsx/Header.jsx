import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

   render(){

       let utilSpace
       if(this.props.showSearch){
           utilSpace = (<input type='text' className='search-input' placeholder='Search' value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />)
       } else {
           utilSpace = (
               <h2 className='header-back'>
                   <Link to='/search'>
                   Back
                   </Link>
               </h2>
           )
       }

       return (
           <header className ='header'>
               <h1 className = 'brand'>
                   <Link to='/' className='brand-link'>
                   svideo
                   </Link>
               </h1>
               {utilSpace}
           </header>
       )
       
   }
}

module.exports = Header