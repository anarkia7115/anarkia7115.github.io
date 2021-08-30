import classNames from "classnames"
import { useState } from "react"

interface IProps {
  images: {
    url:string
    title?:string
    description?:string
  }[]
  onNextProj: ()=>void
  onPrevProj: ()=>void
}

function Carousel(props:IProps) {

  const [activeIdx, setActiveIdx] = useState(0)

  function handlePrevPic() {
    const newIdx = activeIdx-1

    if (newIdx >=0 && newIdx < props.images.length) {
      setActiveIdx(newIdx)
    } else {
      props.onPrevProj()
    }
  }


  function handleNextPic() {
    const newIdx = activeIdx+1
    if (newIdx >=0 && newIdx < props.images.length) {
      setActiveIdx(newIdx)
    } else {
      props.onNextProj()
    }
  }

  function handleIndicatorClick(idx:number) {
    setActiveIdx(idx)
  }

  const oneCarousel = (idx:number, url:string, isActive:boolean, title:string, description?:string)=>
    <div 
      key={idx}
      className={classNames("mx-auto", "carousel-item", isActive?"active":undefined)}
      style={{width:"80%"}}
    >
      <img src={url} className="d-block w-100 border rounded" alt={title}/>

      <div className="carousel-caption d-none d-md-block" 
        style={{background:"black", opacity:"0.7"}}>
        {title?<h5>{title}</h5>:undefined}
        {description?<p>{description}</p>:undefined}
      </div>
    </div>

  const oneCarouselIndicator = (idx:number, isActive:boolean) => 
    <button key={idx} type="button" data-bs-target="" 
      className={classNames(isActive?"active":undefined)}
      onClick={()=>handleIndicatorClick(idx)}
    ></button>

  return(
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {props.images.map((_, i)=>oneCarouselIndicator(i, i === activeIdx))}
      </div>
      <div className="carousel-inner d-flex">
        {props.images.map((p, i)=>oneCarousel(i, p.url, i === activeIdx, p.title, p.description))}
      </div>
      <button className="carousel-control-prev" data-bs-target="" type="button" onClick={handlePrevPic}
        style={{background:"grey"}}
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" data-bs-target="" type="button" onClick={handleNextPic}
        style={{background:"grey"}}
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Carousel