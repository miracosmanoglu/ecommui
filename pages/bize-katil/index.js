import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import LoginandRegister from '../../components/LoginandRegister'
import Register from '../../components/Register'
import Link from 'next/link'
import { useState } from 'react';
import { Breadcrumb } from 'semantic-ui-react'

export default function Account() {
    const [registerPage, setRegisterPage] = useState(false)
    return (
        <Layout>
            <Head>
                <title>Bize Katıl</title>
            </Head>

            <div className='myAccBread'>
                <Breadcrumb>
                    <Breadcrumb.Section>
                        <Link href="/">
                            <a>Anasayfa</a>
                        </Link>
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>
                        Bize Katıl
                    </Breadcrumb.Section>
                </Breadcrumb>
            </div>

            <>
                {/* <NewPassword /> */}
                {registerPage === true ? <Register setRegisterPage={setRegisterPage} /> : <LoginandRegister setRegisterPage={setRegisterPage} />}
            </>

        </Layout>
    )
}