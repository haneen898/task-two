import { useState } from "react"
import Card from "./Card"

const Home = () => {
  const [cartoons, setCartoons]=useState([{name:'Spongebob',img:'https://th.bing.com/th/id/R.cde2d5bdae5553c6567e5704153d7324?rik=Mn2QR3%2fYurtYKg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31300000%2fSpongebob-Squarepants-spongebob-squarepants-31312912-1280-1024.jpg&ehk=IC84JXVT0x9BaTbSLVWuxd8b169v6eNrUoyJrOyStq0%3d&risl=&pid=ImgRaw&r=0',descrption:'kjjk'},
{name:'Mario',img:'https://www.brickfanatics.com/wp-content/uploads/LEGO-Nintendo-characters.jpg',descrption:'hgkkl'},
{name:'Sonic',img:'https://i.redd.it/z7ldz486z2p41.jpg',descrption:'gyiluyh'},
{name:'Pokemon',img:'https://www.pixelstalk.net/wp-content/uploads/images6/The-best-Pokemon-Desktop-Wallpaper-HD-620x388.jpg',descrption:'hklojk'},
{name:'TOM and JERRY',img:'https://s-media-cache-ak0.pinimg.com/736x/4a/95/7d/4a957d23abad5325ae35b5e4e3bb93f9.jpg',descrption:'mnbfyt'},
{name:'Macwen',img:'https://th.bing.com/th/id/OIP.PbDF3AsGiwrH7WEGWFN-uwAAAA?rs=1&pid=ImgDetMain',descrption:'kn jmj'}])
  return (
    <div className="test">
    <div className="cardsContainer">
      { cartoons.map((item, i) => (
      <div className="card1">
        <img src={item.img}/>
        <h3>{item.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex praesentium perferendis id impedit sunt nisi recusandae, ipsa nostrum fugiat error necessitatibus.</p>
      </div>))}
     </div>
     </div>
  )
}

export default Home