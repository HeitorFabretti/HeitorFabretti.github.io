import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import Nopage from "./pages/NoPage"
import React from 'react';
import CoffePixel from "./sprites/coffee-PixelArt.jpg"

class JavaScriptmain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navigation_opening: false
    }
  }

  render() {
    return (
      <>
      <img src={CoffePixel} alt="Pixel Art"/>
      <a href='google.com' onClick={this.navigation_opening}>
        <ol>
          <li id="Navigation-One"></li>
          <li id="Navigation-Two"></li>
          <li id="Navigation-Three"></li>
        </ol>
      </a>
      <nav id='navigation_opening'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Blogs" element={<Blogs />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </nav>
      </>
    )
  }

  navigation_opening = (event) => {
    event.preventDefault()
    const parent_element = document.getElementById("navigation_opening")
    const parts_list = ["Navigation-One", "Navigation-Two", "Navigation-Three"]
    parts_list.forEach(element => {
      const child_element = document.getElementById(element)
      if (this.state.navigation_opening) {
          parent_element.style.transform = "scaleX(0)" 
          child_element.style.right = '0px' 
          child_element.style.transform = "rotate(0deg)"
          child_element.style.position = "relative"
          if (element === "Navigation-Two") {
            child_element.style.opacity = '1'
          }
          if (element === "Navigation-Three") {
            this.setState({navigation_opening: false})
          }
        } else {
          parent_element.style.transform = "scaleX(1)" 
          child_element.style.position = "fixed"
          child_element.style.right = '35px'
          if (element === "Navigation-One") {
            child_element.style.transform = "rotate(45deg)"
          }
          if (element === "Navigation-Two") {
            child_element.style.opacity = '0'
          }
          if (element === "Navigation-Three") {
            child_element.style.transform = "rotate(-45deg)"
            this.setState({navigation_opening: true})
          }
        }
      } 
    )
  }
}

const root = ReactDOM.createRoot(document.querySelector("header"))
root.render(<JavaScriptmain/>)