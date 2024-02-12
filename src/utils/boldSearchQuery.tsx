const boldSearchQuery = (text: string, query: string): React.ReactNode => {
  const index = text.toLowerCase().indexOf(query.toLowerCase())
  if (index !== -1) {
    return (
      <div style={{ display: 'flex' }}>
        {text.substring(0, index)}
        <strong style={{ color: 'lightgreen' }}>
          {text.substring(index, index + query.length)}
        </strong>
        {text.substring(index + query.length)}
      </div>
    )
  }

  return text
}
export default boldSearchQuery
