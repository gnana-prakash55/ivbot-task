import React from 'react'
import { Button, Table } from 'react-bootstrap'

const ListTodo = ({ todos, deleteTodos, updateTodos }) => {
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Todo</th>
          <th>Completed</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            todos.map((item,i) => (
                <tr key={i}>

                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        <input type='checkbox' checked={item.completed} onChange={e => {
                           updateTodos(item.id, e.currentTarget.checked)
                        }} />
                    </td>
                    <td>
                       <Button variant='danger' onClick={() => {
                        deleteTodos(item.id)
                       }}>Delete</Button>
                    </td>
                </tr>
            ))
        }
       
         
      </tbody>
    </Table>
    </div>
  )
}

export default ListTodo