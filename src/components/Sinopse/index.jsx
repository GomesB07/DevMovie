import React, { useEffect, useState } from 'react'

const Sinopse = ({ text, maxWords }) => {
  const [truncatedText, setTruncatedText] = useState('')

  useEffect(() => {
    if (text) {
      const words = text.split(' ').slice(0, maxWords)
      setTruncatedText(words.join(' ') + '...')
    }
  }, [text, maxWords])

  return <p style={{ fontSize: '14px' }}>{truncatedText}</p>
}
export default Sinopse
