import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()
  
  // 配置邮件发送
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "your-email@example.com", // 接收邮件的地址
      subject: "新的网站留言",
      html: `
        <h3>新留言详情：</h3>
        <p>姓名：${body.name}</p>
        <p>邮箱：${body.email}</p>
        <p>电话：${body.phone}</p>
        <p>留言内容：${body.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('发送邮件失败：', error)
    return NextResponse.json({ error: '发送失败' }, { status: 500 })
  }
}