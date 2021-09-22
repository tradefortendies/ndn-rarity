import React from 'react';
import { useRouter } from 'next/router';
import { json2query } from '../util';

export const PageNumbers = (props) => {
  const router = useRouter();
  const { pages } = props;
  let { page_id = 0 } = router.query
  page_id = parseInt(page_id);

  let pageElems = Array.from({ length: pages }, (x, i) => i + 1);
  let start = pageElems.slice(page_id, page_id + 3);
  let end = pageElems.slice(-3);

  const manyPages = () => {
    return (
      <>
        <a className="bg-gray-300 mr-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md =" onClick={() => router.push(`?${json2query({ ...router.query, page_id: parseInt(0) })}`)}>
          🏠
        </a>

        {start.map(val =>
          <a className="bg-blue-300 mr-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={() => router.push(`?${json2query({ ...router.query, page_id: parseInt(val) })}`)}>
            {val}
          </a>
        )}

        <a className="mr-4 text-gray-800 font-bold py-2 px-4">
          ...
        </a>

        {end.map(val =>
          <a className="bg-green-300 mr-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-md" onClick={() => router.push(`?${json2query({ ...router.query, page_id: parseInt(val) })}`)}>
            {val}
          </a>
        )}
      </>
    )
  }

  const fewPages = () => {
    return (
      <>
        {pageElems.map(val =>
          <a className="bg-gray-300 mr-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-md"
            onClick={() => router.push(`?${json2query({ ...router.query, page_id: parseInt(val) })}`)}>
            {val}
          </a>
        )}
      </>
    )
  }

  return (
    <div className="flex mt-8 cursor-pointer">

      {pageElems.length > 0 ? manyPages() : fewPages()}


    </div>
  );
}

