import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './layout/Header';
import AppRouter from './router/AppRouter';
import { useContext,useEffect } from 'react';
import { MyContext } from './context/GlobalContext';
import Footer from './layout/Footer';
import HeaderTop from './components/HeaderTop';
import { useSelector } from 'react-redux';

function App() {

  const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)
  
  const themeStat=localStorage.getItem('theme')
  const blogs=useSelector((store)=>store.AppReducer)
  const localIsLoggedIn=localStorage.getItem('isloggedin')
  const localIsAdminIn=localStorage.getItem('isAdminIn')

  useEffect(()=>{
    themeStat=='dark-theme'?setTheme('bg-black text-light'):setTheme('bg-light')
  },[theme])
  
  useEffect(()=>{
    localStorage.setItem('blogs', JSON.stringify(blogs))
  },[blogs])

  useEffect(()=>{
    localIsLoggedIn=='true'?setIsLoggedIn(true):setIsLoggedIn(false)
    localIsAdminIn=='true'?setIsAdminIn(true):setIsAdminIn(false)
  })

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
}, [])

  return (
    <div className={`App ${theme} pathway-gothic`}>
      <HeaderTop />
      <Header />
      <div className={`main ${theme}`}>
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
