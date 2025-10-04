import React from 'react';
import './CodeUI.css';

const Inline = () => {
  return (
    <>
      <h1 className='textIntro'>CSS Inline:</h1>
      <p>
        To use CSS Inline, first go to an attribute like{' '}
        <code className="code-ui">{`<h1-6>`}</code>{' '}
        or <code className="code-ui">{`<p>`}</code>. Before the <code>{'>'}</code> sign, add <code className="code-ui">{'style=""'}</code>. Inside the "" you can add styles like font-family, font-size or color. Here is an example code!{' '}
        <code className="code-ui">{'<h1 style="font-family: Courier; color:#FF0000"> Hello, World!</h1>'}</code>. Here is a live example:
      </p>
      <h1
    className='no-poppins'
        style={{ '--my-font': 'Courier', color: 'red' }}
      >
        Hello, World!
      </h1>
      <p>And this is how to use CSS inline. (Note: There is way more things in CSS it is just how to set it up!)  </p>
    </>
  );
};

export default Inline;