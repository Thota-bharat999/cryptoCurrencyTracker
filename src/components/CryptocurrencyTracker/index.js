import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="bg-container">
    <h1 className="crypto-heading"> Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency"
      className="image_url"
    />
    <CryptocurrenciesList />
  </div>
)
export default CryptocurrencyTracker
