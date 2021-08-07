import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
// import styles from '../styles/Home.module.css'
import LoginandRegister from '../../components/LoginandRegister'
import Register from '../../components/Register'
import NewPassword from '../../components/NewPassword'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'semantic-ui-react'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import NoSsr from '../../components/utils/NoSsr'

export default function Account() {
    const [registerPage, setRegisterPage] = useState(false)
    const cookies = new Cookies();
    const router = useRouter()

    useEffect(() => {
        if (cookies.get('jwt')) {
            router.replace('/hesap')
        }
    }, [])

    return (
        <NoSsr>
            {cookies.get('jwt') ?
                <div>
                    <span className='redirectSpan'>Yönlendiriliyorsunuz...</span>
                </div>
                :
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

                </Layout>}
        </NoSsr>
    )
}