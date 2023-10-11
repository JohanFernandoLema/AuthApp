import './storesListPage.scss'
import stores from './mock_data'
import { Link } from 'react-router-dom'
const StoresPage = () => {
  return (
    <div className="cards">
      {stores.map((store, index) => (
        <div key={index} className="cardsLayout">
          <div>
            <Link to={`/stores-list/${store.name}`}>
              <h3>{store.location}</h3>
            </Link>
            <img src={store.picture} alt="image" />
            <ul>
              <li>{store.schedule[0]}</li>
              <li>{store.schedule[1]}</li>
              <li>{store.schedule[2]}</li>
              <li>{store.schedule[3]}</li>
              <li>{store.schedule[4]}</li>
              <li>{store.schedule[5]}</li>
              <li>{store.schedule[6]}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
export default StoresPage
