import React from 'react';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import {SearchProvider, Results, SearchBox} from '@elastic/react-search-ui';
import {Layout} from '@elastic/react-search-ui-views';
import '../../style/searchbar.scss';
import '@elastic/react-search-ui-views/lib/styles/styles.css';
import '../../style/blog-detail-styles.scss';

const connector = new AppSearchAPIConnector ({
  searchKey: 'private-v9n4ozacnir49w1mhnqt67qa',
  engineName: 'bully-b-gone',
  hostIdentifier: 'host-sa9iod',
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
            <Results titleField="title" description="description" id="id" />
          }
        />
      </div>
    </SearchProvider>
  );
}
