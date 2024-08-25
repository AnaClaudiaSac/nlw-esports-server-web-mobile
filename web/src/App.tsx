// JSX: JavaScript + XHL (HTML)
//React == Conjunto de HTML, CSS e JavaScript
//Components  = EX: function Button(){}
// Propridades = Enviar uma propriedade para o componente. EX: Title para o Button

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Send 4" />
      <Button title="Hello World!" />
      <Button title="Me livrei da Maldição!" />
    </div>
  );
}

export default App;
