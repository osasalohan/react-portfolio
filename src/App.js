import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import Colors from "./constants/colors";

function App() {
  const [colorScheme, setColorScheme] = useState("achromatic");
  const [showDropdown, setShowDropdown] = useState(false);

  const changeColorScheme = (colorScheme) => {
    setColorScheme(colorScheme);
  };

  const handleBurgerToggle = () => {
    setShowDropdown((showDropdown) => !showDropdown);
  };

  return (
    <Router>
      <Switch>
        <Route path="/blog/:blogPost">
          <NavBar
            backgroundColor={Colors[colorScheme].primary}
            color={Colors[colorScheme].accent}
            handleBurgerToggle={handleBurgerToggle}
            showDropdown={showDropdown}
          />
          <BlogPost
            backgroundColor={Colors[colorScheme].primary}
            color={Colors[colorScheme].accent}
            showDropdown={showDropdown}
          />
        </Route>
        <Route path="/blog">
          <NavBar
            backgroundColor={Colors[colorScheme].primary}
            color={Colors[colorScheme].accent}
            handleBurgerToggle={handleBurgerToggle}
            showDropdown={showDropdown}
          />
          <BlogList
            backgroundColor={Colors[colorScheme].primary}
            color={Colors[colorScheme].accent}
            showDropdown={showDropdown}
          />
        </Route>
        <Route path="/">
          <Home
            colorScheme={colorScheme}
            changeColorScheme={changeColorScheme}
            handleBurgerToggle={handleBurgerToggle}
            showDropdown={showDropdown}
          />
        </Route>
      </Switch>
      <Footer
        backgroundColor={Colors[colorScheme].primary}
        color={Colors[colorScheme].accent}
        showDropdown={showDropdown}
      />
    </Router>
  );
}

export default App;
