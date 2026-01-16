import { Bookmark } from "lucide-react"
 
const Card=(props)=>{
   let brandlogo=props.brandlogo;
   let company=props.company;
   let post=props.post;
   let date=props.date;
   let tag1=props.tag1;
   let tag2=props.tag2;
   let pay=props.pay;
   let location=props.location;


    return(
         <div className="card">
          <div className="top">
            <img src={brandlogo} alt="" />
            <button>Save  <Bookmark /></button>
          </div>
          <div className="center">
              <h3>{company} <span>{date}</span></h3>
              <h2>{post}</h2>
               <div>
                <h4>{tag1}</h4>
                <h4>{tag2}</h4>
               </div>
          </div>
          <div className="bottom">
             <div>
                <h3>{pay}</h3>
                <p>{location}</p>
             </div>
             <button>Apply Now!</button>
          </div>
         </div>
    )
}


export default Card