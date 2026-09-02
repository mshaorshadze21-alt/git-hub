import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  const wines = [
    { name: 'რქაწითელი', type: 'თეთრი ღვინო', price: '25 ₾' },
    { name: 'საფერავი', type: 'წითელი ღვინო', price: '32 ₾' },
    { name: 'ქისი', type: 'ქვევრის ღვინო', price: '29 ₾' }
  ]

  function orderWine(name) {
    setMessage(`${name} დამატებულია შეკვეთაში`)
  }

  return (
    <div>
      <header>
        <h2><h1 className='glas'>🍷</h1>ქვევრის ღვინო</h2>
        <nav>
          <a href="#home">მთავარი</a>
          <a href="#wines">ღვინოები</a>
          <a href="#about">ჩვენ შესახებ</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div>
          <h1>ქართული ღვინო ქვევრიდან</h1>
          <p>ტრადიციული გემო, ქართული ჯიშები და ძველი მეთოდით დაყენებული ღვინო.</p>
          <a className="main-btn" href="#wines">ნახე ღვინოები</a>
        </div>
      </section>

      <section className="wines" id="wines">
        <h2>ჩვენი ღვინოები</h2>
        <div className="wine-list">
          {wines.map((wine) => (
            <div className="card" key={wine.name}>
              <div className="bottle">🍷</div>
              <h3>{wine.name}</h3>
              <p>{wine.type}</p>
              <b>{wine.price}</b>
              <button onClick={() => orderWine(wine.name)}>შეკვეთა</button>
            </div>
          ))}
        </div>
        {message && <p className="message">{message}</p>}
      </section>

      <section className="about" id="about">
        <h2>ჩვენ შესახებ</h2>
        <p>
          ჩვენი პატარა მარანი ღვინოს ქვევრში ტრადიციული ქართული წესით აყენებს.
          ვცდილობთ შევინარჩუნოთ ბუნებრივი გემო და ოჯახური ტრადიცია.
        </p>
      </section>

      <footer>
        <p>© 2026 ქვევრის ღვინო</p>
      </footer>
    </div>
  )
}

export default App
