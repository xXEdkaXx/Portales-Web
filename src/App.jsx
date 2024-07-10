import './App.css'


import MainLayout from './components/layout/MainLayout'
import BaseButton from './components/buttons/BaseButton'
function App() {

  return (
    <MainLayout>
      <h1>Room Checker Children Content</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor sit aut voluptatibus, dolore recusandae, voluptas a rerum veritatis doloribus illum cupiditate odit officiis ducimus mollitia unde aliquid perferendis ex.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor sit aut voluptatibus, dolore recusandae, voluptas a rerum veritatis doloribus illum cupiditate odit officiis ducimus mollitia unde aliquid perferendis ex.</p>
      <BaseButton onClick={() => alert('Button clicked')}>Click me</BaseButton>
    </MainLayout>
  )
}

export default App
