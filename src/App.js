
import React from 'react';
// import logo from './logo.svg';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import pancake from './images/8bitPC.jpg';

import './css/App.css';

class App extends React.Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={pancake} className="App-logo" alt="pancake" />

          <div>
            <Nav />
            <Jumbotron />
            <Container>
              <Row>
                <Col size="md-12">
                  <form>
                    <Container>
                      <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="recipeSearch"
                            value={this.state.recipeSearch}
                            onChange={this.handleInputChange}
                            placeholder="Search For a Recipe"
                          />
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={this.handleFormSubmit}
                            type="success"
                            className="input-lg"
                          >
                            Search
                      </Button>
                        </Col>
                      </Row>
                    </Container>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col size="xs-12">
                  {!this.state.recipes.length ? (
                    <h1 className="text-center">//////////</h1>
                  ) : (
                      <RecipeList>
                        {this.state.recipes.map(recipe => {
                          return (
                            <RecipeListItem
                              key={recipe.title}
                              title={recipe.title}
                              href={recipe.href}
                              ingredients={recipe.ingredients}
                              thumbnail={recipe.thumbnail}
                            />
                          );
                        })}
                      </RecipeList>
                    )}
                </Col>
              </Row>
            </Container>
          </div>
          <p>
            Welcome to StaKC, the  one stop shop for new developers trying to break into the industry in Kansas City
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Log In
          <br></br>
            link still goes to react
          </a>
        </header>

      </div>


    );
  }
}

export default App;
