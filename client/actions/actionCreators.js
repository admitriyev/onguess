// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(projectId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    projectId,
    author,
    comment
  }
}

// remove comment

export function removeComment(projectId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    projectId
  }
}
