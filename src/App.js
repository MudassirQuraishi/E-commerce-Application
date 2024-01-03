import "./App.css";
import Footer from "./Layout/Footer/Footer";
import OffcanvasExample from "./Layout/Navbar/Navbar";
import MusicSection from "./components/MusicSection";

function App() {
    return (
        <>
            <header>
                <OffcanvasExample></OffcanvasExample>
                <h1>Welcome To Quraishi's</h1>
            </header>
            <main>
                <MusicSection></MusicSection>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default App;
