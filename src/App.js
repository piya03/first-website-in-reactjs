import React from 'react';
import './App.css';
import Header from './components/header';
import PopularItems from './components/populerItems'
import LatestVideo from './components/latestVideo'
import Footer from './components/footer';
import Banner from './components/banner';
function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <PopularItems />
    <LatestVideo />
    <Footer />
    </div>
  );
}

export default App;
