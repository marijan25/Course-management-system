export const getCourses = async () => {
    const res = await fetch('http://localhost:8000/courses')
    const data = await res.json()   
    return data
  }

  export const addCourse = async (newCourse) => {
    fetch('http://localhost:8000/courses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    })
}

export const deleteCourse = async (id) => {
  fetch(`http://localhost:8000/courses/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
}

export const editCourse = async (editForm) => {
  fetch(`http://localhost:8000/courses/${editForm.id}`, {
    method: 'PUT',
    body: JSON.stringify(editForm),
    headers: {
      'Content-type': 'application/json',
    },
  })
}
