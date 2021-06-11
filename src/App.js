import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import  AuthContextProvider from './contexts/AuthContext';
import AuthToggler from './components/AuthToggler';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
            <BookContextProvider>
            <BookList/>
          </BookContextProvider>
          <ThemeToggle/>
          <AuthToggler/>
        </AuthContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
