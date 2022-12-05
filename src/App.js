import './App.css';
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import styled from "styled-components";
// import { H1, H2 } from './styles/typography'
import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom';

import StyleGuide from "./views/StyleGuide";
import TripSummary from "./views/TripSummary";
import Driver from "./views/Driver";
import Vehicle from "./views/Vehicle";
import TripProgress from "./views/TripProgress";

import Nav from './components/Nav'
import Footer from './components/Footer';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper className="App">
          <Nav/>
          <Routes>
            <Route path="/alto" element={<StyleGuide/>}/>
            <Route path="/driver" element={<Driver/>}/>
            <Route path="/trip-summary" element={<TripSummary/>}/>
            <Route path="/vehicle" element={<Vehicle/>}/>
            <Route path="/trip-progress" element={<TripProgress/>}/>
            <Route path="/" element={ <Navigate to="/alto" /> } />
          </Routes>
          <Footer/>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;