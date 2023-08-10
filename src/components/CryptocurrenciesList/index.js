import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class cryptocurrenciesList extends Component {
  state = {
    cryptocurrenciesLists: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getcryptocurrenciesList()
  }

  getcryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const update = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({cryptocurrenciesLists: update, isLoading: false})
  }

  render() {
    const {cryptocurrenciesLists, isLoading} = this.state
    console.log(cryptocurrenciesLists)
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <ul className="crypto-current-list">
              <li className="type-container">
                <p className="coin">Coin Type</p>
                <div className="usd-container">
                  <p className="usd">USD</p>
                  <p className="euro">EURO</p>
                </div>
              </li>
              {cryptocurrenciesLists.map(each => (
                <CryptocurrencyItem
                  cryptoCurrencyDetails={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default cryptocurrenciesList
