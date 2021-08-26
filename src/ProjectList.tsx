const projects = [...Array(9).keys()]

function ProjectList() {
  const pInRow = 3
  const projectsComp = [...Array(projects.length / pInRow).keys()]
    .map(rowId=>{
      /* row of projects */
      console.log(`${rowId*pInRow}, ${rowId*(pInRow+1)}`)
      return <div key={rowId} className="d-flex justify-content-center">
        {projects.slice(rowId*pInRow, (rowId+1)*pInRow)
          .map(p=><Project key={p} id={`${p}`}/>)}
      </div>
    })
  return(
    <div className="text-center">
      <h2>Projects</h2>
      {projectsComp}
    </div>
  )
}

function Project(props:{id:string}) {
  return(
    <div 
      className="m-2"
      style={{
        height:"150px", 
        width: "150px", 
        border: "solid"
      }}
    >
      {props.id}

    </div>
    
  )
}
export default ProjectList