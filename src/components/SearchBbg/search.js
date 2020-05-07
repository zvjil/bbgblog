import React from 'react';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import {SearchProvider, Results, SearchBox} from '@elastic/react-search-ui';
import {Layout} from '@elastic/react-search-ui-views';
import '../../style/searchbar.scss';
import '@elastic/react-search-ui-views/lib/styles/styles.css';
import '../../style/blog-detail-styles.scss';

const connector = new AppSearchAPIConnector ({
  searchKey: 'private-xo9cn3v8nkp2ct43s853qf9t',
  engineName: 'bullybgone',
  hostIdentifier: 'host-175vbc',
});

export default function App () {
  return (
    <SearchProvider
      config={{
        apiConnector: connector,
      }}
    >
      <div className="search-bar">
        <Layout
          header={<SearchBox autocompleteSuggestions={true} />}
          bodyContent={
            <Results
              titleField="title"
              description="description"
              id="id"
              nps_link="nps_link"
            />
          }
        />
      </div>
    </SearchProvider>
  );
}
