import React from "react"

// Equivalente a
// function Header() {
const Header = () => {
  return (
    <header>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ff0000",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        todos
      </h1>
    </header>
  )
}

export default Header