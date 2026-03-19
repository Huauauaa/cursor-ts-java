import { Button, Card, Layout, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getCurrentUsername, logout } from '../services/auth'

const { Header, Content } = Layout

function HomePage() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <Layout className="min-h-screen">
      <Header className="flex items-center justify-between !bg-slate-900 !px-8">
        <Typography.Title level={4} className="!mb-0 !text-white">
          管理后台
        </Typography.Title>
        <Button onClick={handleLogout}>退出登录</Button>
      </Header>

      <Content className="p-6 md:p-10">
        <Card className="mx-auto max-w-3xl shadow-sm">
          <Typography.Title level={2}>首页</Typography.Title>
          <Typography.Paragraph>
            欢迎你，<strong>{getCurrentUsername()}</strong>。
          </Typography.Paragraph>
          <Typography.Paragraph type="secondary">
            你已成功完成登录，并进入首页。
          </Typography.Paragraph>
        </Card>
      </Content>
    </Layout>
  )
}

export default HomePage
