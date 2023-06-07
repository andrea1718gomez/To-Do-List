import React, { useState } from 'react';
import { Container, Card } from "react-bootstrap";
import AddToDo from "../../components/AddToDo";
import Item from "../../components/item";

const ItemList = () => {
    const [tasks, setTasks] = useState([]);

    const CreateNewTask = (text) => {
        const newTask = {
            text : text,
            mark : false
        }
        setTasks([...tasks, newTask]);
    }

    const DeleteTask = (index) => {
        const newTask = tasks.filter((item) => item.text != tasks[index].text)
        setTasks(newTask);
    }

    const MarkCompleteTask = (index) => {
        const newTask = tasks;
        newTask[index].mark = true;
        setTasks([...newTask]);
    }

    return (
        <>
            <Container className="d-flex justify-content-center" >
                <Card
                    bg={'primary'}
                    key={1}
                    text={'dark'}
                    style={{ width: '40rem' }}
                    className="mb-3"
                >
                    <Card.Header>To Do</Card.Header>
                    <Card.Body>

                        <div className="mb-5">
                            <AddToDo UnaPropiedad={CreateNewTask} />
                        </div>
                        <div >
                            {
                                tasks.map((item, index) => (
                                    <Item
                                         DeleteTask={DeleteTask} 
                                         MarkCompleteTask={MarkCompleteTask}
                                         key={index} 
                                         index={index} 
                                         item={item} />
                                ))
                            }
                        </div>

                    </Card.Body>
                </Card>

            </Container>
        </>
    );
}

export default ItemList;