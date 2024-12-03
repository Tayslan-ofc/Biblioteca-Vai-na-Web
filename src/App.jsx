import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import './GlobalStyle/globalStyle.scss'

import './components/header/header.module.scss'
import './components/footer/footer.module.scss'

export default function App(){
  return(
   <section>
     <Header/>
     <Footer/>
   </section>
  )
}