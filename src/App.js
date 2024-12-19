import React from 'react'
import Form from './Component/Form/From'

const App = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex h-screen w-96 bg-slate-800'>
          <h1>React App</h1>
        </div>
        <div className='flex flex-col place-content-center '>
          <Form />
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    </>
  )
}

export default App