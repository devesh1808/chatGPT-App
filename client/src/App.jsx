import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png"

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          <div className="chat-bubble">
            <div className="avatar">
              <img src={user} />
            </div>
            <div className="post">lorem ipsum dollar site amet</div>
          </div>
          <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} />
            </div>
            <div className="post">lorem ipsum dollar site amet</div>
          </div>
        </div>
      </section>
      <footer>
        <input
          className="composebar"
          autoFocus
          type="text"
          placeholder="Ask me anything!"
          onChange={() => {}}
        />
        <div className="send-button">
          <img src={send} />
        </div>
      </footer>
    </main>
  );
}

export default App;
