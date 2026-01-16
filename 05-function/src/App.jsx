
function App() {
    // function btnClick(){
    //     console.log("button is clicked")
    // }
    // function mouseEnter(){
    //     console.log("Mouse enter")
    // }


    // function inputChange(elem){
    //     console.log(elem)
    // }


    function onscrooling(elem){
       if(elem.deltaY>0){
        console.log("niche scrolling..")
       }
       else{
        console.log("upper scrolling...")
       }
    }
 return(
    <div>
        {/* <button onMouseEnter={mouseEnter} onDoubleClick={btnClick}>click me!</button>
        <button style={{marginLeft:"3px"}} onClick={()=>{
            console.log("button was clicked")
        }}>Explore</button> */}
         
        {/* <input onChange={(elem)=>{
            inputChange(elem.target.value)
        }
            } type="text"  placeholder='type something here'/>

        <div onMouseMove={(elem)=>{
          console.log(elem.clientY)
        }} style={{height:"200px",width:"200px",backgroundColor:"aqua", margin:"50px"}} ></div>
     */}
    
    


     <div onWheel={(elem)=>{
        
       onscrooling(elem);
     }}>
        <div  className="page1">hello</div>
        <div className="page2">hello</div>
        <div className="page3">hello</div>
     </div>
    </div>
 )

}


export default App
