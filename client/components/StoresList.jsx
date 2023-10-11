import stores from './mock_data'

const StoresList = () => {
  return (
    <div>
      {stores.map((store, index) => (
        <>
          <p>
            You can find us at <b> {store.locations} </b>
          </p>
          <p>
            Feel free to reach us out at <b> {store.phone} </b> for further
            information
          </p>
          <p key={index}>{store.email}</p>
          <h3>Attentions Hours</h3>
          <div>
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
        </>
      ))}
    </div>
  )
}
export default StoresList
