import { useLoaderData, useParams } from "react-router-dom"


export default function CareersDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career details for { career.title }</h2>
      <p>starting salary  { career.salary }</p>
      <p>Location { career.location }</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi eum asperiores doloremque voluptas possimus corrupti perferendis et? 
          Cumque iure ratione et eveniet est ex?</p>
      </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/careers/' + id)

  return res.json()
}