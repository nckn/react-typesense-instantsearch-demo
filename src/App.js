import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Panel,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

// Mine
const searchClient = algoliasearch('WWCUAY5GUM', '9cb1b6943b43bd5b257fc77f6d3ea5a8');

// Org
// const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">react-instantsearch-app</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        {/* Org */}
        {/* <InstantSearch searchClient={searchClient} indexName="instant_search"> */}
        {/* Mine */}
        <InstantSearch searchClient={searchClient} indexName="dev_konradstudio">
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">
              <Panel header="brand">
                <RefinementList attribute="brand" />
              </Panel>
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  
  // Mine
  return (
    <article>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <h1>
        <Highlight attribute="name" hit={props.hit} />
        {props.hit.name}
      </h1>
      <p>
        <Highlight attribute="description" hit={props.hit} />
        {props.hit.description}
      </p>
    </article>
  );

  // Org
  // return (
  //   <article>
  //     <img src={props.hit.image} align="left" alt={props.hit.name} />
  //     <h1>
  //       <Highlight attribute="name" hit={props.hit} />
  //     </h1>
  //     <p>
  //       <Highlight attribute="description" hit={props.hit} />
  //     </p>
  //   </article>
  // );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
