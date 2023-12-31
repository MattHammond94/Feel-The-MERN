import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(job => (
        <Link to={job.id.toString()} key={job.id}>
          <p>{job.title}</p>
          <p>Based in {job.location}</p>
        </Link>
      ))}
    </div>
  )
}

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  if (!res.ok) {
    throw Error('Could not fetch the careers')
  }

  return res.json()
}