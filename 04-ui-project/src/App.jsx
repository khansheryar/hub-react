import React from "react"
import Section1 from "./components/Section1/Section1.jsx"


function App() {

  const user=[
    {
      color:"rgb(42, 82, 190)",
      num:1,
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'Dedicated work professional demonstrating efficiency, problem-solving, reliability, communication, leadership, and continuous improvement across roles globally.',
      tag:'Satisfied',

    },
    {
      color:"rgb(240, 128, 128)",
      num:2,
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Skilled professional focused on productivity, innovation, collaboration, accountability, time management, and achieving organizational goals success',
      tag:'Undersaved',
    },
    {
      color:"rgb(80, 200, 120)",
      num:3,
      img:'https://images.unsplash.com/photo-1713947501966-34897f21162e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Results-driven professional with strong technical skills, adaptability, teamwork, and consistent delivery of high-quality outcomes worldwide.',
      tag:'Underbanked',
    },
    {
      color:"rgb(153, 102, 204)",      
      num:4,
      img:'https://images.unsplash.com/photo-1758873272345-40f377c21e7f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Proactive and detail-oriented worker focused on innovation, collaboration, reliability, leadership, and achieving business objectives effectively.',
      tag:'UnderDeserved',
    },
  ]
  return (
     <>
   <Section1 user={user}/>
  
   
     </>
    
  )
}

export default App
