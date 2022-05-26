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

export const getTeachers = async () => {
  const res = await fetch('http://localhost:8000/teachers')
  const data = await res.json()   
  return data
}

export const addTeacher = async (newTeacher) => {
  fetch('http://localhost:8000/teachers', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newTeacher),
  })
}

export const editTeacher = async (editForm) => {
  fetch(`http://localhost:8000/teachers/${editForm.id}`, {
    method: 'PUT',
    body: JSON.stringify(editForm),
    headers: {
      'Content-type': 'application/json',
    },
  })
}

export const deleteTeacher = async (id) => {
  fetch(`http://localhost:8000/teachers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
}

export const getStudents = async () => {
  const res = await fetch('http://localhost:8000/students')
  const data = await res.json()   
  return data
}

export const addStudent = async (newStudent) => {
  fetch('http://localhost:8000/students', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newStudent),
  })
}

export const editStudent = async (editForm) => {
  fetch(`http://localhost:8000/students/${editForm.id}`, {
    method: 'PUT',
    body: JSON.stringify(editForm),
    headers: {
      'Content-type': 'application/json',
    },
  })
}

export const deleteStudent = async (id) => {
  fetch(`http://localhost:8000/students/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
}
