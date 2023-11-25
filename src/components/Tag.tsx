import React from 'react'

interface props {
    tag: String;
    deleteTag: (tag: String) => void;
}

const Tag = ({tag, deleteTag}: props) => {

  function handleClick() {
    deleteTag(tag);
  }

  return (
    <span>
        {tag}
        <button type='button' onClick={handleClick}>X</button>
    </span>
  )
}

export default Tag