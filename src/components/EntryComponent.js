import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedEntrys } from '../redux/actions/entryActions';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { TbDroplet } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


function EntryComponent() {
  const navigate = useNavigate();
  const entry = useSelector((state) => state.entry);
  const { title, total_page, tags } = entry;
  const PageNumbers = "";  

  const dispatch = useDispatch();

  const fetchEntryDetail = async (currentPage) => {
    const response = await 
    axios.get(`https://eksisozluk-api.herokuapp.com/api/baslik/eksi-sozluk--31966?a=&p=${currentPage}`).catch(err => {
      console.log("Err", err);
    });
    dispatch(selectedEntrys(response.data));
  };
  const handleClicked = async (data) => {
    let currentPage = data.selected + 1;
    const commentFromServer = await fetchEntryDetail(currentPage);
    PageNumbers = (commentFromServer);
  }
  useEffect(() => {
    fetchEntryDetail();
  }, [])

  return (
     <div>
      <div>
      {Object.keys(entry).length === 0 ? (
        <div className='text-secondary text-center'><h4>...loading</h4></div>
      ) : (
        <div className='mt-2'>
          <Card>
            <Card.Body>
              <Row>
              <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={2}
                  pageCount={total_page}
                  previousLabel="<"
                  onPageChange={handleClicked}
                  containerClassName={"pagination pagination-sm justify-content-center"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  previousLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                  onClick={(clickEvent) => {
                    console.log('onClick', clickEvent);
                    // Return false to prevent standard page change,
                    // return false; // --> Will do nothing.
                    // return a number to choose the next page,
                    // return 4; --> Will go to page 5 (index 4)
                    // return nothing (undefined) to let standard behavior take place.
                  }}
                />
                <Col lg={10}>

                  <Card.Title><h3>{title}</h3></Card.Title>
                </Col>
                <Col lg={2}>
                {tags ? <small> kanal: {tags.toString()}</small> : <p></p>}

                </Col>
              </Row>
              {entry.entries.map((entry) => {
                
              const {id, body, fav_count, author, created_at, updated_at} = entry;
              function contentClickHandler(e) {
                  e.target.closest('a');
                  if (e.target.search.startsWith("?q=")) {
                    e.preventDefault();
                    let query = e.target.search.split("?q=")[1];
                    query = query.replaceAll("+", " ");
                    query = "baslik/" + query;
                     // this.props.history.push(e.target.href)
                     navigate(query);
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
    </div>
  )
}

export default EntryComponent;