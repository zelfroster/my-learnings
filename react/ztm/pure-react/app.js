const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation)
  ])
}
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { class: 'title' }, "React is Rendered"),
    React.createElement(Person, { name: 'Sumit', occupation: 'student' },),
    React.createElement(Person, { name: 'Rakesh', occupation: 'teacher' },),
    React.createElement(Person, { name: 'Shubho', occupation: 'master' },),
  ]);
};

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

//Old way to render React App
// ReactDOM.render(
//   React.createElement(App),
//   document.getElementById('root')
// );
