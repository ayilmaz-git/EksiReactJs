import './assets/css/App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import LeftFrame from './components/LeftFrame';
import EntryComponent from './components/EntryComponent';
import Footer from './components/Footer';
import EntrySingle from './components/EntrySingle';
import UserSearch from './components/UserSearch';
import NotFound from './components/NotFound';
import EntryDetail from './components/EntryDetail';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container className="mt-3">
          <Row>
            <Col lg={3} xs={12} md={12} className="l">
              <Routes>
                <Route path="/*" element={<LeftFrame />} />
              </Routes>
            </Col>
            <Col lg={9} xs={12} md={12} className="l">
              <Routes>
                <Route path="/" element={<EntryComponent />} />
                <Route path="baslik/:slug" element={<EntryDetail />} />
                <Route path="entry/:id" element={<EntrySingle />} />
                <Route path="biri/:author" element={<UserSearch />} />
                <Route path="*" element={<NotFound />}> 404 not found</Route>
              </Routes>
            </Col>
            <Footer/>
          </Row>
        </Container>
      </div>
    );
  }
}