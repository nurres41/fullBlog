const { default: Document, Html, Main, NextScript } = require("next/document");
const { default: Head } = require("next/head");

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}