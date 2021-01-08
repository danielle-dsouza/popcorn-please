import React from "react";
import styled from "styled-components";
import axios from "axios";
import { SEARCH_SUCCESS, SEARCH_ERR } from "../store/actions/actionsTypes";
import { connect } from "react-redux";
import Button from "./Button";

class SearchBar extends React.Component {
  state = {
    query: "",
    result: {},
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
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
          },
        });
        this.props.dispatch({ type: SEARCH_SUCCESS, payload: this.state.result });
      });
    } catch (err) {
      console.log(err);
      this.props.dispatch({ type: SEARCH_ERR });
    }
  };

  render() {
    return (
      <SearchWrapper>
        <SearchBox
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleChange}
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
    background-color: ${theme.color.background};
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

export default connect()(SearchBar);
