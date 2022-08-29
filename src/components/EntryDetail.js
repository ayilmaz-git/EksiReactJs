import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedEntrys } from '../redux/actions/entryActions';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { TbDroplet } from 'react-icons/tb';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';


function EntryDetail() {
  const entry = useSelector((state) => state.entry);
  const { title, total_page, tags } = entry;
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchEntryDetail = async () => {
    const response = await axios.get(`https://eksisozluk-api.herokuapp.com/api/baslik/${slug}?a=dailynice`).catch(err => {
      console.log("Err", err);
    });
    dispatch(selectedEntrys(response.data));
  };
  useEffect(() => {
    if (slug && slug !== "")fetchEntryDetail();
  }, [slug]);
  return (
    <div>
      {Object.keys(entry).length === 0 ? (
        <div className='text-secondary text-center'><h4>...loading</h4></div>
      ) : (
        <div className='mt-2'>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={10}>
                  <Card.Title><h3>{title}</h3></Card.Title><br />
                </Col>
                <Col lg={2}>
                  <ButtonGroup size="sm">
                    <DropdownButton size="sm" variant="light" as={ButtonGroup} title="1" id="bg-nested-dropdown">
                      <Dropdown.Item eventKey="{total_page}">{total_page}</Dropdown.Item>
                    </DropdownButton>
                    <Button size="sm" variant="light"><Link to={`?a=popular&p=${total_page}`}>{total_page}</Link></Button>
                    <Button size="sm" variant="light">></Button>
                  </ButtonGroup>
                </Col>
                {tags ? <em>{tags.toString()}</em> : <p></p>}

              </Row>
              {entry.entries.map((entry) => {
            
                const { id, body, fav_count, author, created_at, updated_at } = entry;
                function contentClickHandler(e) {
                  e.target.closest('a');
                  if (e.target.search.startsWith("?q=")) {
                    e.preventDefault();
                    let query = e.target.search.split("?q=")[1];
                    query = query.replaceAll("+", " ");
                    query = "baslik/" + query;
                     // this.props.history.push(e.target.href)
                     navigate("/" + query);
                      }
                };
                return (
                  <div className='mt-5'>
                    <Card.Text onClick={contentClickHandler} dangerouslySetInnerHTML={{ __html: body }}>
                    </Card.Text>
                    <Row>
                      <Col lg={3}>
                        <TbDroplet className='text-success' /><Card.Link className='text-secondary'>{fav_count}</Card.Link>
                      </Col>
                      <Col lg={9} className="text-right inline">
                        <Card.Link > <Link className="link text-success" to={`/biri/${author}`}> <i className="fa-solid fa-user"></i> {author} </Link> </Card.Link>
                        <Card.Link > <Link className="link text-success" to={`/entry/${id}`}> #{id} </Link> </Card.Link>
                        <Card.Link className='text-secondary'>{created_at}</Card.Link>
                        <Card.Link className='text-secondary'> {updated_at}</Card.Link>
                      </Col>
                    </Row>
                    <hr></hr>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default EntryDetail;