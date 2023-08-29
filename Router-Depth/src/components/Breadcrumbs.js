import { useLocation } from 'react-router-dom'

export default function Breadcumbs() {
  const location = useLocation()

  console.log(location)

  return (
    <div>Breadcumbs</div>
  )
}
