import { useParams } from 'react-router-dom'
import stores from './mock_data'
import EmployeesList from '../components/EmployeesList'

const StorePage = () => {
  const { storeId } = useParams()
  const storeDisplay = stores.find((store) => store.name === storeId)

  return (
    <>
      <h1>{storeDisplay.location}</h1>
      <div>
        <div>
          Want to ask us something before you visit us? - Send us an e-mail or
          just call us at
          <ul>
            <li>{storeDisplay.phone}</li>
            <li>{storeDisplay.email}</li>
          </ul>
        </div>
        <h3>Attention Hours</h3>
        <ul>
          <li>{storeDisplay.schedule[0]}</li>
          <li>{storeDisplay.schedule[1]}</li>
          <li>{storeDisplay.schedule[2]}</li>
          <li>{storeDisplay.schedule[3]}</li>
          <li>{storeDisplay.schedule[4]}</li>
          <li>{storeDisplay.schedule[5]}</li>
          <li>{storeDisplay.schedule[6]}</li>
        </ul>
      </div>
      <p>
        <EmployeesList />{' '}
      </p>
    </>
  )
}

export default StorePage
