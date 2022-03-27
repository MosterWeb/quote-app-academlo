
import './components-css/App.css';
import CardQuotes from './components/CardQuotes';
import Quotes from './Quotes.json'
import { useState } from 'react';

function App() {

  // Declaración de los colores a utilizar en el boton y fondo de la app-quote
  let colors = ["Blue", "Grey", "Green", "Violet", "Orange", "Red"];

  //Declaración del ramdom empleado en los colores  de la app-quote
  let randomColor = Math.floor((Math.random() * 4) + 1);

  //Declaración del ramdom empleado en la quote-app para las citas
  let randomQuote = Math.floor((Math.random() * 101) + 1);

  //El random del estado inicial de la app
  let randomQuoteState = Math.floor((Math.random() * 20) + 1);

  //Declaración del estado inicial de la quote-app
  const [quote, setQuote] = useState(Quotes.quotes[randomQuoteState]);


  //Declaración de la funcion principal dela quote-app.Indica el ramdon respectivo.
  const getCitas = () => {
    setQuote(Quotes.quotes[randomQuote]);
  }


  return (
    <div className="App">

      {/* En el  header se declara una clase dinámica, que está concatenada con el ramdon de colores */}
      <header className={`App-header-${colors[randomColor]}`}>
        <div className="card-quotes">
          
          {/* Se declara el llamado al setQuote. Será recibido por el componente, en donde se desglkosan las respectivas propiedades: auto, cita, id  */}
          <CardQuotes
            quotes={quote}
          />

          {/* En el  botton  se declara una clase dinámica, que 
          está concatenada con el ramdon de colores. El onclick dirige a
           la funciónrespectiva */}
          <button className={`App-button-${colors[randomColor]}`} onClick={() => getCitas()}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
