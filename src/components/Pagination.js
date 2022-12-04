import React from 'react';

function Pagination({ max, currentPage, pageNav }) {
  const pageDown = currentPage - 1;
  const pageUp = currentPage + 1;

  function displayPreceeding() {
    return (
      <li>
        <a
          onClick={() => {
            pageNav(pageDown);
          }}
          className="pagination-link"
          aria-label={`Goto page ${pageDown}`}
        >
          {pageDown}
        </a>
      </li>
    );
  }

  function displayFollowing() {
    {
      return (
        <li>
          <a
            onClick={() => {
              pageNav(pageUp);
            }}
            className="pagination-link"
            aria-label={`Goto page ${pageUp}`}
          >
            {pageUp}
          </a>
        </li>
      );
    }
  }

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        onClick={() => {
          pageNav(currentPage == 1 ? currentPage : currentPage - 1);
        }}
        className="pagination-previous"
      >
        Previous
      </a>
      <a
        onClick={() => {
          pageNav(currentPage == max ? currentPage : currentPage + 1);
        }}
        className="pagination-next"
      >
        Next page
      </a>
      <ul className="pagination-list">
        <li>
          <a
            onClick={() => {
              pageNav(1);
            }}
            className="pagination-link"
            aria-label="Goto page 1"
          >
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <>{currentPage != 1 ? displayPreceeding() : ''}</>

        <li>
          <a
            className="pagination-link is-current"
            aria-label={`Page ${currentPage}`}
            aria-current="page"
          >
            {currentPage}
          </a>
        </li>
        <>{currentPage != max ? displayFollowing() : ''}</>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a
            onClick={() => {
              pageNav(max);
            }}
            className="pagination-link"
            aria-label={`Goto page ${max}`}
          >
            {max}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
