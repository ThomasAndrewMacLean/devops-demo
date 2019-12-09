import React from 'react';

import Head from 'next/head'


const Layout = (props:any) => (
    <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            </Head>
            <style jsx global>{`
            body { 
            background: #000;
            font: 18px menlo;
            color: #fff;
            width:80%;
            max-width:750px;
            margin: auto;
            }
            a{
                color:inherit;
            }
`}</style>
{props.children}
</>
  );
  
  export default Layout;
