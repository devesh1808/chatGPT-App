import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {posts.map((post, index) => {
            <div className={`chat-bubble ${post.type === "bot" || post.type === "loading" ? "bot" : ""}`}>
              <div className="avatar">
                <img src={post.type === "bot" || post.type === "loading" ? bot : user} />
              </div>
              <div className="post">{post.post}</div>
            </div>;
          })}
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
