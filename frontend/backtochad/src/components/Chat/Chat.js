import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md='6' lg='5' xl='4'>
                        <div className='p-3'>
                            <InputGroup md='3' className='rounded'>
                                <Form.Control className='rounded' placeholder="Search" aria-label="Username" type='search' />
                                <span className="input-group-text border-0" id="search-addon">
                                    {/* <i className="fa fa-search"></i> */}
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                            </InputGroup>
                            <div data-mdb-perfect-scrollbar="true" style={{"position": "relative", "height": "400px"}}>
                                <ListGroup as={'ul'} bsPrefix='list-unstyled'>
                                    <ListGroup.Item as={'li'} bsPrefix='border-bottom' className='p-2'>
                                        <a href='#!' className='d-flex justify-content-between'>
                                            <div className='d-flex flex-row'>
                                                <div>
                                                    <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp' alt='avatar' className='d-flex align-self-center me-3' width={'60'}></img>
                                                    <span className="badge bg-success badge-dot"></span>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="fw-bold mb-0">Marie Horwitz</p>
                                                    <p className="small text-muted">Hello, Are you there?</p>
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <p className="small text-muted mb-1">Just now</p>
                                                <span className="badge bg-danger rounded-pill float-end">3</span>
                                            </div>
                                        </a>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col md='6' lg='7' xl='8'>
                        <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{"position": "relative", "height": "400px"}}>
                            <div className="d-flex flex-row justify-content-start">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                    alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                                <div>
                                    <p className="small p-2 ms-3 mb-1 rounded-3" style={{"backgroundColor": "#f5f6f7"}}>Lorem ipsum
                                        dolor
                                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.
                                    </p>
                                    <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                                    quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                </div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Chat