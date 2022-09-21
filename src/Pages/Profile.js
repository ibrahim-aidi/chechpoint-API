import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  axios from "axios"
import { Card,Button } from 'react-bootstrap'
const Profile = () => {
  
  const {id} =useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res) => setUser(res.data[0]))
    .catch((error)=> console.log(error))
  }, )
  
  return (
    <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.username}
        </Card.Text>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Button variant="primary">
<Link to={`/users`}> go back </Link>


        </Button>
      </Card.Body>
    </Card>
        </div>
  )
}

export default Profile