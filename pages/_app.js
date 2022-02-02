/* eslint-disable react/jsx-props-no-spreading */
import '../styles/styles.scss';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;
