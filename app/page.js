// pages/index.js
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Corrected import path and component name

import ForHerHome from './ForHerHome';

export default function Home() {

    return (
        <div className='Main '>
            
            <Navbar />
            <ForHerHome/>
            <Footer/>
        </div>
    );
}