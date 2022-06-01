import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import From from './components/form/From';
import AuthProvider from './Context/AuthProvider';
import Layout from './Layout/Layout';
import Home from './Pages/Home';

export default function App() {
    return (
        <div className="app">
            <AuthProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />}>
                                <Route path="car" element={<From text="CAR" />} />
                                <Route path="hotel" element={<From text="HOTEL" />} />
                                <Route path="people" element={<From text="PEOPLE" />} />
                                <Route path="pCar" element={<From text="MERCEDES CAR" />} />
                                <Route path="boat" element={<From text="BOAT" />} />
                            </Route>
                        </Routes>
                    </Layout>
                </Router>
            </AuthProvider>
        </div>
    );
}
