import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setEntrys } from '../redux/actions/entryActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function LeftFrame() {
    const entrys = useSelector((state) => state.allEntrys.entrys);
    const dispatch = useDispatch();
    const fetchEntrys = async () => {
        const response = await axios.get("https://eksisozluk-api.herokuapp.com/api/basliklar").catch((err) => {
            console.log("Err", err)
        });
        dispatch(setEntrys(response.data))
    }

    useEffect(() => {
        fetchEntrys();
    }, [entrys]);
    return (
        <div>
            <Link to="/eksireactjs">
                <Card className="text-center">
                    <Button disabled variant="outline-success" size="sm">
                        <em>gündem</em>
                    </Button>
                </Card>
            </Link>
            <ListGroup className="leftFrameScroll" variant="flush">
                {entrys.map((entry) => {
                    const {id, slug, title, entry_count} = entry;
                    return (
                        <Link className="link" to={`/baslik${slug}`}>
                            <ListGroup.Item
                                className="d-flex justify-content-between align-items-start"
                                key={id}
                            >
                                {title}
                                <Badge bg="warning" pill>
                                    {entry_count}
                                </Badge>
                            </ListGroup.Item>
                        </Link>
                    );
                })}
            </ListGroup>

        </div>
    )
}

export default LeftFrame;