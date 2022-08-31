import React from 'react'
import NavBar from '../components/NavBar'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <NavBar />
            <div className='home-div'>
                Frontend Questions Solutions
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Questions</th>
                            <th>Pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Question1 : React Reuseable Component</td>
                            <td><Link to="/1">Answer</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Question2 : Number Counter</td>
                            <td><Link to="/2">Answer</Link></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Question3 : Widget Task</td>
                            <td><Link to="/3">Answer</Link></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Question4 : Single Page Portfolio</td>
                            <td><a href='https://anmol-react-portfolio.netlify.app/' target={'_blank'}>Answer</a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </main>
    )
}

export default Home