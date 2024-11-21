import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()
  
  // 配置邮件发送
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "nic1990519@gmail.com",
      pass: "xndcrebzpjufmcsy"
    },
    debug: true, // 启用调试模式
    logger: true // 启用日志
  })

  try {
    // 在发送前验证连接
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Log configuration info (without password)
    console.log('Email configuration:', {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      user: "nic1990519@gmail.com"
    });

    await transporter.sendMail({
      from: "nic1990519@gmail.com",
      to: "info@kiwigolf.co.nz",
      subject: "New Website Inquiry",
      html: `
        <h3>New Message Details:</h3>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>Message: ${body.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json({ error: 'Sending failed' }, { status: 500 })
  }
}