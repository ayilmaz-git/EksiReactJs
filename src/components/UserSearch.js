import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { selectedUser } from '../redux/actions/userActions';


function UserSearch() {
  const user = useSelector((state) => state.users);
  const { quote_entry_title } = user;
  const { author } = useParams();
  const dispatch = useDispatch();
  const fetchUser = async () => {
    const response = await axios.get(`https://eksisozluk-api.herokuapp.com/api/biri/${author}`).catch(err => {
      console.log("Err", err);
    });
    dispatch(selectedUser(response.data));
  };
  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <div className='success text-center'>...loading</div>
      ) : (
        <div className='mt-2'>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={12}>
                  <Card.Title> <h3>Yazar: {author}</h3></Card.Title>
                  {/* {quote_entry_title} endpoint ile ilgili birsorun var */}
                  <em>bu alan güncellenecektir</em>
                </Col>
              </Row>

            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default UserSearch;