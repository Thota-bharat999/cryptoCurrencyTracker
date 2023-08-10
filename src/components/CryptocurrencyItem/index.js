import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptoCurrencyDetails

  return (
    <li className="item-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
