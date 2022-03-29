import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 80vw;
  margin: auto;
`
const SearchContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: #f5f5f7;
`
const StyleLabel = styled.label`
  margin-right: 10px;
`
const ResultDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`
const MenuItem = styled.div`
  padding: 20px;
  margin: 10px;
  border: 1px solid #000000;
  text-align: center;
`
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
      menuRes: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value,})
  }
  async handleSubmit(e) {
    e.preventDefault()
    const menuRes = await fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=${this.state.searchKey}&apiKey=4979c4496fcc410c88d8488fbf3ddf15`,
    )
    const menu = await menuRes.json()
    console.log(menu)
    this.setState({menuRes: menu.menuItems,})
  }
  render() {
    return (
      <>
        <Container>
          <h1>Explore Menu</h1>
          <SearchContainer>
            <form onSubmit={this.handleSubmit}>
              <StyleLabel htmlFor='searchKey'>Are you looking for food?</StyleLabel>
              <input type='text' id='searchKey' name='searchKey' value={this.state.searchKey} onChange={this.handleChange}/>
              <button type='submit'>Search</button>
            </form>
          </SearchContainer>
        </Container>
        <ResultDisplay>
            {this.state.menuRes && this.state.menuRes.map((m) => {
                return (
                    <MenuItem key={m.id}>
                        <img src={ m.image || 'https://plchldr.co/i/120x120?text=No+Image'} alt={m.title} style={{ width: '120px', height: '120px' }}/>
                    <div>{m.title}({m.restaurantChain})</div>
                    </MenuItem>
                )
            })}
        </ResultDisplay>
      </>
    )
  }
}

export default Menu;
