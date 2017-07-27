import React from 'react'

export default class AddCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {}
    }
    this.submitCat = this.submitCat.bind(this)
    this.updateNewCatDetails = this.updateNewCatDetails.bind(this)
  }
  updateNewCatDetails(e) {
    let newCat = this.state.newCat
    newCat[e.target.name] = e.target.value
    //do something
    this.setState({newCat: newCat})
  }
  submitCat(e) {
    e.preventDefault()
    console.log({e});
    console.log("the cat is", this.state.newCat);
  }
  render() {
    return (
      <form onSubmit={this.submitCat}>
        <input name="name" placeholder="name" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
        <input name="age" placeholder="age" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
        <input name="colour" placeholder="colour" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
        <select name="isAlive" onChange={(e) => this.updateNewCatDetails(e)}>
          <option selected disabled>Does this exist?</option>
          <option value={true}>Ye</option>
          <option value={false}>Neh</option>
        </select>
        <input type="submit" />
        <p>{this.state.newCat.name}</p>
      </form>
    )
  }
}
