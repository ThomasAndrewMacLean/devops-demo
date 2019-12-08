import * as React from 'react';
import { NextPage } from 'next';

if (typeof window !== 'undefined') {
    fetch(`http://${document.location.hostname}:4000`)
        .then(x => x.text())
        .then(y => {
              console.log(y);
        });
}

const IndexPage: NextPage = () => {
    return <h1>Index Page!</h1>;
};

export default IndexPage;
