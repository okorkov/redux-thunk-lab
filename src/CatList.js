import React, { Component } from 'react'


export class CatList extends Component {
  render() {
    const cats = this.props.catPics.map(cat => <img src={cat.url}></img>)
    return (
      <div>
        {cats}
      </div>
    )
  }
}



export default CatList

