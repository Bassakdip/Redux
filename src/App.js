import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";


function App() {
  return (
    <div>
      <Header />
      <Auth/>
      <Counter />
      <UserProfile/>
    </div>
  );
}

export default App;
