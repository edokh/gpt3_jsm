import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>ChatGPT is an advanced AI language model, trained to understand and respond to a wide range of topics. It harnesses the power of machine learning to engage in meaningful conversations, providing information, assistance, and creative insights. With its vast knowledge and linguistic capabilities, ChatGPT aims to facilitate seamless communication and foster learning experiences for users around the world.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email' />
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header