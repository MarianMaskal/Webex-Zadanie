import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meno: '',
      adresa: '',
      popisPodnetu: '',
      obrazok: '',
      podnety: [
        {
          meno: 'Kristina',
          adresa: 'Fajarov 38',
          popisPodnetu: 'Prosim',
          obrazok: '',
          cas: new Date().toLocaleString()
        }
      ],
      style:'display:hidden;',
      isHidden: true
    }
    this.handleMenoChange = this.handleMenoChange.bind(this)
    this.handleAdresaChange = this.handleAdresaChange.bind(this)
    this.handlePopisChange = this.handlePopisChange.bind(this)
    this.handleObrazokChange = this.handleObrazokChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMenoChange (event) {
    this.setState({ meno: event.target.value })
  }
  handleAdresaChange (event) {
    this.setState({ adresa: event.target.value })
  }
  handlePopisChange (event) {
    this.setState({ popisPodnetu: event.target.value })
  }
  handleObrazokChange (event) {
    this.setState({ obrazok: URL.createObjectURL(event.target.files[0]) })
  }
  handleClick = event => event.target.classList.add('click-state');


  handleSubmit (event) {

    event.preventDefault()

    let arr = [...this.state.podnety]
    arr.unshift({
      meno: this.state.meno,
      adresa: this.state.adresa,
      popisPodnetu: this.state.popisPodnetu,
      obrazok: this.state.obrazok,
      cas: new Date().toLocaleString()
    })

    this.setState({ podnety: arr })
    console.log(this.state.podnety)

  }
  render () {
    return (
      <div className="formular-div">
          <h2>Marián Maskaľ - zadanie</h2>
        <form className="formular" onSubmit={this.handleSubmit}>
          <label>
            Meno:
            <input
              type='text'
              value={this.state.meno}
              onChange={this.handleMenoChange}
            />
          </label>
          <label>
            Adresa:
            <input
              type='text'
              value={this.state.adresa}
              onChange={this.handleAdresaChange}
            />
          </label>
          <label>
            Popis podnetu:
            <textarea
              value={this.state.popisPodnetu}
              onChange={this.handlePopisChange}
            />
          </label>
          <label>
            <input type='file' onChange={this.handleObrazokChange} />
            <img alt='daco' src={this.state.obrazok} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <div>
            {this.state.podnety.map(item => 
              <div className="item" onClick={this.handleClick} key={item.meno}>{item.meno}
               <ul className="podnet">
                   <li>{item.meno}</li>
                   <li>{item.adresa}</li>
                   <li>{item.popisPodnetu}</li>
                   <li><img alt="obrazok" src={item.obrazok}></img></li>
                   <li>{item.cas}</li>
                </ul>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Form
