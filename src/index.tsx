import ReactDOM from 'react-dom';
import EventComponent from './events/EventCpmponent';

const App = () => {
  return <div>
    <EventComponent />
  </div>
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)