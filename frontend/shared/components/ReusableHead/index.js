//Next
import Head from 'next/head'

export function ReusableHead(props) {
  return (
    <>
      <Head>
        {/* Meta */}
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon and other sizes */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}