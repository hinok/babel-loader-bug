import React from 'react';
import ReactDOM from 'react-dom';

const Foo = ({ children }) => <div>{children}</div>;
const Bar = ({ icon, children }) => <div>{icon}{children}</div>;

const bazFactory = ({ text, icon }) => props => (
  <Foo {...props}>
    <Bar icon={icon}>
      {text}
    </Bar>
  </Foo>
);

const App = () => (
  <div>
    {bazFactory({ text: 'Hello World', icon: 'An icon' })}
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
