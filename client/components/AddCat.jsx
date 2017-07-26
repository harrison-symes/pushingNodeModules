import React from 'react'

export default class AddCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {}
    }
    this.updateInputDetails = this.updateInputDetails.bind(this)
    this.submitCat = this.submitCat.bind(this)
  }
  updateInputDetails(e) {
    let newCat = this.state.newCat
    newCat[e.target.name] = e.target.value
    this.setState({newCat})
    console.log(this.state);
  }
  submitCat(e) {
    e.preventDefault()
    //stand in until we learn about API's
    console.log(this.state.newCat);
  }
  render() {
    return (
      <form onSubmit={this.submitCat}>
        <input type="text" name="name" placeholder="name" onChange={this.updateInputDetails} />
        <input type="text" name="breed" placeholder="breed" onChange={this.updateInputDetails} />
        <input type="text" name="owner" placeholder="owner" onChange={this.updateInputDetails} />
        <input type="submit" value="Create Cat"/>
      </form>
    )
  }
}
