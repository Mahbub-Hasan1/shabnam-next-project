import Head from 'next/head'
import Link from 'next/link'

const leyout = ({ children }) => {
    return (
        <div>
            <Head>
                {/* <!-- Compiled and minified CSS --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                
                <link rel="stylesheet" href="/style.css" />

                <title> mahbub </title>
            </Head>

            <nav>
                <div className="nav-wrapper">
                    <Link href="/" ><a className="left brand-logo">Logo</a></Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link href="/sass"><a>Sass</a></Link></li>
                        <li><Link href="/component"><a>component</a></Link></li>
                        <li><Link href="/javascript"><a>JavaScript</a></Link></li>
                    </ul>
                </div>
            </nav>




            {children}




            {/* <!-- Compiled and minified JavaScript --> */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
    )
}

export default leyout