import React from "react"
import {
  render, screen,
} from "@testing-library/react"
import Header from "./Header"

describe("Header component", () => {
  it("Renders correctly", () => {
    render(<Header />)
    screen.debug()
  })
  it("Renders the nav of the header", () => {
    render(<Header />)

    const element1 = screen.getByText("Pull requests")
    const element2 = screen.getByText("Issues")
    const element3 = screen.getByText("Codespaces")
    const element4 = screen.getByText("Marketplace")
    const element5 = screen.getByText("Explore")
    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4).toBeInTheDocument()
    expect(element5).toBeInTheDocument()
  })
})
