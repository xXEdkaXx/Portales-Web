import MainLayout from './components/layout/MainLayout';
import {BaseButton, PrimaryButton, SecundaryButton} from './components/buttons/BaseButton';
function App() {
  return (
    <MainLayout>
      <h1>Room Checker Children Content</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor sit aut voluptatibus, dolore recusandae, voluptas a rerum veritatis doloribus illum cupiditate odit officiis ducimus mollitia unde aliquid perferendis ex.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor sit aut voluptatibus, dolore recusandae, voluptas a rerum veritatis doloribus illum cupiditate odit officiis ducimus mollitia unde aliquid perferendis ex.</p>
      <BaseButton onClick={() => alert('Button clicked')}>Click me</BaseButton>
      <PrimaryButton onClick={() => alert('Primary Button clicked')}>Click me</PrimaryButton>
      <SecundaryButton onClick={() => alert('Secunday Button clicked')}>Click me</SecundaryButton>
    </MainLayout>
  )
}

export default App;
