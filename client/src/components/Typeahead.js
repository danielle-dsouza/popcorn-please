import React from "react";
import styled from "styled-components";
import axios from "axios";
import { SEARCH_SUCCESS, SEARCH_ERR } from "../store/actions/actionsTypes";
import { connect } from "react-redux";
import Button from "./Button";

class SearchBar extends React.Component {
  state = {
    active: 0,
    filtered: [],
    show: false,
    query: "",
    result: {},
    titles: [],
  };

  componentDidMount() {
    fetch("/data")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          titles: json,
        });
      });
  }

  handleChange = (e) => {
    const suggestions = this.state.titles;
    const search = e.target.value;

    const filtered = suggestions
      .filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
      .slice(0, 10);

    this.setState({
      active: 0,
      filtered,
      show: true,
      query: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.handleSubmit(this.state.query);
    this.setState({
      query: "",
    });
  };

  handleSubmit = (search) => {
    try {
      // API Call
      axios.get(`/search/${search}`).then(async (res) => {
        const data = await res.data;

        // Add to state
        this.setState({
          result: {
            title: data["Title"],
            year: data["Year"],
            plot: data["Plot"],
            poster: data["Poster"],
            rated: data["Rated"],
            released: data["Released"],
            genre: data["Genre"],
            director: data["Director"],
            writer: data["Writer"],
            actors: data["Actors"],
            awards: data["Awards"],
            rating: data["imdbRating"],
            boxOffice: data["BoxOffice"],
          },
        });
        this.props.dispatch({
          type: SEARCH_SUCCESS,
          payload: this.state.result,
        });
      });
    } catch (err) {
      console.log(err);
      this.props.dispatch({ type: SEARCH_ERR });
    }
  };

  handleMore = (search) => {
    try {
      // API Call
      axios.get(`/search/${search}`).then(async (res) => {
        const data = await res.data;

        // Add to state
        this.setState({
          result: {
            title: data["Title"],
            year: data["Year"],
            plot: data["Plot"],
            poster: data["Poster"],
          },
        });
        this.props.dispatch({
          type: SEARCH_SUCCESS,
          payload: this.state.result,
        });
      });
    } catch (err) {
      console.log(err);
      this.props.dispatch({ type: SEARCH_ERR });
    }
  };

  handleClick = (e) => {
    this.handleSubmit(e.target.innerText);
    this.setState({
      active: 0,
      filtered: [],
      show: false,
      query: "",
    });
  };

  handleKeyDown = (e) => {
    const { active, filtered } = this.state;

    // Enter key
    if (e.keyCode === 13) {
      this.setState({
        active: 0,
        show: false,
        query: e.target.value,
      });
    }
    // Up arrow
    else if (e.keyCode === 38) {
      if (active === 0) {
        return;
      }

      this.setState({ active: active - 1 });
    }
    // Down Arrow
    else if (e.keyCode === 40) {
      if (active - 1 === filtered.length) {
        return;
      }

      this.setState({ active: active + 1 });
    }
  };

  render() {
    const {
      handleChange,
      handleClick,
      handleKeyDown,
      state: { active, filtered, show, query },
    } = this;

    let suggestionsListComponent;

    if (show && query) {
      if (filtered.length) {
        suggestionsListComponent = (
          <div>
            {filtered.map((suggestion, index) => {
              let className;

              if (index === active) {
                className = "suggestion-active";
              }

              return (
                <p className={className} key={index} onClick={handleClick}>
                  {suggestion}
                </p>
              );
            })}
          </div>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div>
        <SearchWrapper>
          <SearchBox
            placeholder="Search"
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={query}
          />
          <Button
            type="submit"
            onClick={this.handleSearch}
            style={{
              visibility: "hidden",
              width: "0px",
              padding: "0",
              border: "none",
            }}
          >
            Search
          </Button>
        </SearchWrapper>
        <SuggestionDiv>{suggestionsListComponent}</SuggestionDiv>
      </div>
    );
  }
}

const SearchWrapper = styled.form`
  ${({ theme }) => `
    margin: 0 2%;
    display: flex;
    align-items: center;
    
    @media ${theme.media["tablet"]} {
        margin: 0;
    }

    @media ${theme.media["desktop"]} {
        margin: 0;
    }
    `}
`;

const SearchBox = styled.input`
  ${({ theme }) => `
    width: 90%;
    border: 3px solid ${theme.color.primary};
    font-family: ${theme.font.default};
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 50px;
    padding: 15px;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.15);

    @media ${theme.media["tablet"]} {
        width: 100%;
        height: 40px;
    }

    @media ${theme.media["desktop"]} {
        width: 100%;
        height: 30px;
        font-size: 1/3rem;
    }
    `}
`;

const SuggestionDiv = styled.div`
  ${({ theme }) => `
    position: absolute;
    background-color: white;
    p {
        font-family: ${theme.font.default};
        margin: 0;
        padding: 1% 3%;
        
        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }
    `}
`;

export default connect()(SearchBar);
