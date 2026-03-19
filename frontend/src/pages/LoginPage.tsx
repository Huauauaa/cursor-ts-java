import { Button, Card, Form, Input, Typography, message } from 'antd'
import type { FormProps } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { LoginRequest } from '../services/auth'
import { login } from '../services/auth'

type LoginFields = LoginRequest

function LoginPage() {
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const onFinish: FormProps<LoginFields>['onFinish'] = async (values) => {
    try {
      setSubmitting(true)
      await login(values)
      message.success('登录成功')
      navigate('/home', { replace: true })
    } catch {
      message.error('用户名或密码错误')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <div className="mb-6 text-center">
          <Typography.Title level={3} className="!mb-1">
            用户登录
          </Typography.Title>
          <Typography.Text type="secondary">
            React + Ant Design + Tailwind CSS
          </Typography.Text>
        </div>

        <Form<LoginFields>
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ username: 'admin', password: '123456' }}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item className="!mb-2">
            <Button type="primary" htmlType="submit" block loading={submitting}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
