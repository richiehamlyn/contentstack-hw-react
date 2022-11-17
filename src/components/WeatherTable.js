import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function WeatherTable() {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('running useEffect')
    //fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://mjgh1cx0le.execute-api.us-west-1.amazonaws.com/default/weatherAPI')
    .then(response => response.json())
    .then(
      json => setItems(Object.entries(json))
      
      )
    
}, [])

  return (
    <>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:'30px'}}>
      {items.map(item => {
        return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.ctfassets.net/hrltx12pl8hq/1DauLWsEwcnLf4NpCUMxxZ/85290d98239ff0bbee9803932249c444/weather-shutterstock_1716559711.jpg?fit=fill&w=480&h=320" />
        <Card.Body>
          <Card.Title>{item[1].location}</Card.Title>
          <Card.Text>
          {item[1].time}
          <br />
          <img src={`${item[1].icon_weather}`} width="20px" />
          <br />
          Current temp: {item[1].temperature_current} <br />
          High temp: {item[1].temperature_low} <br />
          High temp: {item[1].temperature_high} <br />
          </Card.Text>
          <Button variant="primary">Get more details</Button>
        </Card.Body>
      </Card>
        )
      })}
    </div>
    </>
  )
  }