import React, {useEffect, useMemo, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReactMarkdown from 'react-markdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

import './Chat.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {useAuth} from "../../contexts/authContext";
import {ChatsApi} from "../../api/chats";
import useChatConnection from "../../hooks/useChatConnection";
import useParsedToken from "../../hooks/useParsedToken";


const ChatItem = (props) => {
    return (
        <ListGroup onClick={props.onClick} as={'li'} className="p-2 border-bottom" id={props.chat_id}>
            <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                    <div>
                        <img
                            src={props.avatar}
                            alt="avatar" className="d-flex align-self-center me-3" width="60"></img>
                        <span className="badge bg-success badge-dot"></span>
                    </div>
                    <div className="pt-1">
                        <p className="fw-bold mb-0">{props.username}</p>
                        <p className="small text-muted">{props.user_status}</p>
                    </div>
                </div>
                <div className="pt-1">
                    <p className="small text-muted mb-1">{props.last_visited}</p>
                    <span className="badge bg-danger rounded-pill float-end">{props.unread_messages}</span>
                </div>
            </a>
        </ListGroup>
    )
}

const Message = (props) => {

    const input = '# Test'

    const menu =
        <SplitButton align="right" title="" id="dropdown-menu-align-end">
            <Dropdown.Item eventKey="1">Создать задачу</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item eventKey="4">Пометить важным</Dropdown.Item>
        </SplitButton>

    const msg_from_other =
        <div className={`d-flex flex-row justify-content-start'}`}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                 alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
            <div>
                <p className="small p-2 ms-3 mb-1 rounded-3" style={{"backgroundColor": "#f5f6f7"}}>
                    {props.msg}
                    {menu}
                </p>
                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                    {props.msg_date}
                </p>
            </div>
        </div>

    const msg_from_me =
        <div className="d-flex flex-row justify-content-end">
            <div>
                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    {props.msg}
                    {menu}
                </p>
                <p className="small me-3 mb-3 rounded-3 text-muted">
                    {props.msg_date}
                </p>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                 alt="avatar 1" style={{"width": "45px", "height": "100%"}}></img>
        </div>

    return (
        <>
            {props.author_id === props.current_user_id ? msg_from_me : msg_from_other}
        </>
        // <ReactMarkdown source={input} />
    )
}

const Chat = () => {
    const authContext = useAuth();
    const [chats, setChats] = useState([]);
    const parsedToken = useParsedToken(authContext.token);

    const [selectedChatId, setSelectedChatId] = useState(null);
    const messages = useChatConnection(selectedChatId);

    const [newMessageText, setNewMessageText] = useState("");
    const sendMessage = async () => {
        setNewMessageText("");
        if(newMessageText)
            await ChatsApi.send(authContext.token, selectedChatId, newMessageText);
    };

    useEffect(() => {
        async function foo() {
            const chats = await ChatsApi.getChats(authContext.token);
            setChats(chats);
        }

        foo();
    }, [])

    const vms = useMemo(() => {
        return chats.map(x => ({
            id: x.id,
            avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
            name: x.name,
            unreadMessages: 5,
            lastVisit: 'Вчера',
            status: "Hello, Are you there?"
        }))
    }, [chats]);

    const list_item = vms.map((item) =>
        <ChatItem
            username={item.name}
            user_status={item.status}
            last_visited={item.lastVisit}
            unread_messages={item.unreadMessages}
            avatar={item.avatar}
            chat_id={item.id}
            onClick={() => setSelectedChatId(item.id)}
        />
    );

    return (
        <section style={{"backgroundColor": "#CDC4F9"}}>
            <div className="container py-5">
                <Row>
                    <Col md={12}>
                        <Card id="chat3" style={{"borderRadius": "15px"}}>
                            <Card.Body>
                                <Row>
                                    <Col md={6} lg={5} xl={4} mb={4} mb-md={0}>
                                        <div className="p-3">

                                            <InputGroup className="rounded" mb={3}>
                                                <Form.Control type="search" className="rounded" placeholder="Search"
                                                              aria-label="Search"
                                                              aria-describedby="search-addon"/>
                                                <InputGroup.Text className="border-0" id="search-addon">
                                                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                                </InputGroup.Text>
                                            </InputGroup>

                                            <PerfectScrollbar className='perfect-scrollbar'
                                                              data-mdb-perfect-scrollbar="true"
                                                              style={{"position": "relative", "height": "400px"}}
                                                              scrollbarYActive={true}>
                                                <ListGroup as={'ul'} bsPrefix="list-unstyled" mb={0}>
                                                    {list_item}
                                                </ListGroup>
                                            </PerfectScrollbar>

                                        </div>

                                    </Col>

                                    <Col md={6} lg={7} xl={8}>

                                        <PerfectScrollbar className="pt-3 pe-3 perfect-scrollbar"
                                                          data-mdb-perfect-scrollbar="true"
                                                          style={{"position": "relative", "height": "400px"}}
                                                          scrollbarYActive={true}>
                                            {messages.map(mes => (
                                                <Message
                                                    author_id={mes.authorid}
                                                    current_user_id={parsedToken.id}
                                                    msg={mes.textbody}
                                                    msg_date={mes.createdat}
                                                />
                                            ))}

                                        </PerfectScrollbar>

                                        <div
                                            className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                alt="avatar 3" style={{"width": "40px", "height": "100%"}}></img>
                                            <input
                                                onChange={e => setNewMessageText(e.target.value)}
                                                value={newMessageText}
                                                onKeyDown={e => {
                                                    console.log(e.key);
                                                    if(e.key === "Enter")
                                                        sendMessage();
                                                }}
                                                type="text" className="form-control form-control-lg"
                                                id="exampleFormControlInput2"
                                                placeholder="Type message"/>
                                            <a className="ms-1 text-muted" href="#!"><i
                                                className="fas fa-paperclip"></i></a>
                                            <a className="ms-3 text-muted" href="#!"><i
                                                className="fas fa-smile"></i></a>
                                            <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                                        </div>

                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </div>
        </section>
    )
}

export default Chat