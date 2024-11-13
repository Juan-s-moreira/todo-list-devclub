import { useState } from "react";
import { Item, Container, TodoList, Input, Button, Ul } from './App'

function App() {
    const [tasks, setTasks] = useState([])
    const [inputValue, SetInputValue] = useState("")

    // const tasks = ['Comprar pão de aio', 'comer pão de aio']

    function inputChange(event) {
        SetInputValue(event.target.value)

    }

    function buttonClick() {
        setTasks([...tasks, inputValue])
    }


    return (
        <>
            <Container>
                <TodoList>
                    <Input placeholder="Digite uma tarefa" onChange={inputChange} />
                    <Button onClick={buttonClick}>Adicionar tarefa</Button>

                    <Ul>
                        {
                            tasks.map((item, index) => (
                                <Item key={index}>{item}</Item>
                            ))
                        }
                    </Ul>
                </TodoList>
            </Container>


        </>
    )
}

export default App