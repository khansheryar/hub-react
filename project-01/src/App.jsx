import React from "react"
import "./App.jsx"
import Card from "./components/cards.jsx"


const App=()=>{
  const jobOpenings = [
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.uBYsSL7JDekYP3VpxWZvYQHaHa%3Fpid%3DApi&f=1&ipt=ef9f6c7a66247b0ad4f8065cc774dedff1bbe8d2ef32b139e54b043a43e16b8a&ipo=images",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$20/hour",
    location: "KPK, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.LCaZJHqFbyM_nwYU_qdvawHaHa%3Fpid%3DApi&f=1&ipt=42f1b91f8cb0d8ce9e367ab41ad41fb3ddf3e000ab34953014ba13cd3f62a90d&ipo=images",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$30/hour",
    location: "Sindh, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fmeta%2Fmeta_PNG12.png&f=1&nofb=1&ipt=96b76ecf21e861a3cc73506e8f8b09c94ce7df1b57946d3b8f8d57297cd1be3a",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "KPK, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.dLl9UyA6y1GTydI-npnoygHaHv%3Fpid%3DApi&f=1&ipt=3a04fc16cba63991101d8a8a97dd558f40e52fbbd8f32e3394b0e877c92fc773&ipo=images",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Islamabad, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Of2MrfKXGN1chuR1adiytQHaHa%3Fpid%3DApi&f=1&ipt=a7135c11b06304166371ad3c7727a095294903ec34210ccc45b00598ba5d5d3f&ipo=images",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Rawalpandi, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.pCPdT6AfARaET4-IBW8HTgHaEo%3Fpid%3DApi&f=1&ipt=1ac0b0cdc81a952b154ec5d8dcbae0bcba54e1dfd929b05afb813a08931ae7e5&ipo=images",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Punjab, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.5x0bqIWJZ0Q912i6olkDLwHaEK%3Fpid%3DApi&f=1&ipt=54ca7e95c8cf08d150f9a314590d25f48cc802be57d598f0cdd01d22670ec262&ipo=images",
    companyName: "Oracle",
    datePosted: "4 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Sindh, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.OSgrxD559IOgjj6br4opMQHaEK%3Fpid%3DApi&f=1&ipt=d914025510caabd1a246cfe86ea7ca7bc4feec97229f6177694737bd103e3909&ipo=images",
    companyName: "Shopify",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$90/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.DxO6I1nIpYppxOsGs9bb3gHaHa%3Fpid%3DApi&f=1&ipt=a88ff33d34e3092f0ed8307d97260f48b760c32ed8b63e33d12078dbd83768a5&ipo=images",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$100/hour",
    location: "Karachi, Pakistan"
  },
  {
    brandlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.Lrxsd7qE1xlNSo9qczRXHgHaHa%3Fpid%3DApi&f=1&ipt=d48bdf1f6b00800956778344c3684ef59ae982fc48e39ee9a0d57abd8d9ad0e3&ipo=images",
    companyName: "Spotify",
    datePosted: "8 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Islamabad, Pakistan"
  }
];
  return (
    <div className="parent">
     {jobOpenings.map(function(elem){
      return <Card
      company={elem.companyName} 
      post={elem.post} 
      date={elem.datePosted}
      tag1={elem.tag1}
      tag2={elem.tag2}
      pay={elem.pay}
      location={elem.location}
      brandlogo={elem.brandlogo}
      />
     })}
    </div>
  )
}

export default App
