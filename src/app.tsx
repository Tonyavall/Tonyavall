import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/main'
import Home from './pages/index'
import Works from './pages/works'
import SingleWork from './pages/works/single_work'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/works/:work" element={<SingleWork/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
