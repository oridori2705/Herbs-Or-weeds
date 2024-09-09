import { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface LinkCardListItemProps {
  id: string
  children: ReactNode
}

const LinkCardListItem = ({ id, children }: LinkCardListItemProps) => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('name')

  return (
    <Link to={`/picture/${id}${searchQuery ? `?name=${searchQuery}` : ``}`}>
      {children}
    </Link>
  )
}

export default LinkCardListItem
