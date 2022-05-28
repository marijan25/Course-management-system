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
  