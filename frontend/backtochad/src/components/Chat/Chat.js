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
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const Chat = () => {
    const list_item = [
        {
            'name': 'Mary',
            'status': 'Hello, Are you there?',
            'last_visited': 'Just now',
            'unread_messages': 3,
            'avatar': 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            'chat_id': "242345"
        },
        {
            'name': 'Вова',
            'status': 'Hello, Are you there?',
            'last_visited': 'Вчера',
            'unread_messages': 15,
            'avatar': 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            'chat_id': 242346
        },
        {
            'name': 'Алексей',
            'status': 'Hello, Are you there?',
            'last_visited': '3 часа назад',
            'unread_messages': 3,
            'avatar': 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            'chat_id': 24234
        },
        {
            'name': 'Mary',
            'status': 'Hello, Are you there?',
            'last_visited': 'Just now',
            'unread_messages': 3,
            'avatar': 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            'chat_id': 242341
        },
        {
            'name': 'Mary',
            'status': 'Hello, Are you there?',
            'last_visited': 'Just now',
            'unread_messages': 3,
            'avatar': 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            'chat_id': 242342
        },
        {
            'name': 'Mary',
            'status': 'Hello, Are you there?',
            'last_visited': 'Just now',
            'unread_messages': 3,
            'avatar': 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            'chat_id': 242343
        }
    ].map((item) => 
    <Nav.Item>
        <Nav.Link eventKey={item.chat_id}>
            <div className='d-flex flex-row'>
                <div>
                    <img src={item.avatar} alt='avatar' className='d-flex align-self-center me-3' width={'60'}></img>
                    <span className="badge bg-success badge-dot"></span>
                </div>
                <div className="pt-1">
                    <p className="fw-bold mb-0">{item.name}</p>
                    <p className="small text-muted">{item.status}</p>
                </div>
            </div>
            <div className="pt-1">
                <p className="small text-muted mb-1">{item.last_visited}</p>
                <span className="badge bg-danger rounded-pill float-end">{item.unread_messages}</span>
            </div>
        </Nav.Link>
    </Nav.Item>
    )
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column" navbarScroll={true}>
            {list_item}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="242345">
              {/* <Sonnet /> */}
              <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true">
                    <div className="d-flex flex-row justify-content-start">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{"backgroundColor": "#f5f6f7"}}>Lorem ipsum
                          dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore
                          magna aliqua.</p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
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
  
                    <div className="d-flex flex-row justify-content-start">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{"backgroundColor": "#f5f6f7"}}>Duis aute
                          irure
                          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Excepteur sint occaecat
                          cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                      </div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                    </div>
  
                    <div className="d-flex flex-row justify-content-start">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{"backgroundColor": "#f5f6f7"}}>Sed ut
                          perspiciatis
                          unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                          rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                          dicta
                          sunt explicabo.</p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Nemo enim ipsam
                          voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                          qui
                          ratione voluptatem sequi nesciunt.</p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                      </div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                    </div>
  
                    <div className="d-flex flex-row justify-content-start">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{"backgroundColor": "#f5f6f7"}}>Neque porro
                          quisquam
                          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                          numquam
                          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minima veniam,
                          quis
                          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                          commodi
                          consequatur?</p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                      </div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
                    </div>
  
                  </div>
  
                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3" style={{"width": "40px", "height": "100%"}}></img>
                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                      placeholder="Type message"></input>
                    <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                    <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                    <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                  </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {/* <Sonnet /> */}
              test
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    )
}

export default Chat