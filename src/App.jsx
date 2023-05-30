
import './App.css'
import IPhone from './chat-flow/Iphone/IPhone'
// import ChatFlow from './chat-flow'
import ChatFlow2 from './chat-flow/ChatFlow'
import OverviewFlow from './react-flow'
import Chats from './chat-flow/chats/Chats'
// import OverviewFlow from './react-flow';


function App() {

  return (
    <div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: 50, gap: '2rem' }}>

        <IPhone>
          <Chats />
        </IPhone>
        <OverviewFlow />
        {/* <ChatFlow2 /> */}
      </div>

    </div>
  )
}

export default App
