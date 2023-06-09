import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import { Button, Checkbox, Form, Input } from 'antd';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Head>
        <title>Intranet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img src='/logo.png' width='139' height='74' />
          {/* <img src='/login-left-image.png' className={styles.leftImage} /> */}
          <p>&copy;2023 All rights reserved</p>
        </div>
        <div className={styles.rightContainer}>
          <h1>SIGN IN</h1>
          <p>Welcome to Intranet</p>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email Id"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size='large' />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>


    </>
  )
}
