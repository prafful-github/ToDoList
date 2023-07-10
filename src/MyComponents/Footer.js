import React from 'react'

export const Footer = () => {
  let footerStyle = {
    width: "100%",
    border: "2px solid red"
  }
  return (
    <footer className='bg-dark text-light py-2' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MytodosList.com
      </p>
    </footer>
  )
}
