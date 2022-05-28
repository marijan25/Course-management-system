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
  