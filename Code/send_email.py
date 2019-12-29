import smtplib
from email.mime.text import MIMEText
from email.header import Header

def send(text):
    smtp_server = 'smtp.qq.com'
    from_addr = '929935011@qq.com'
    password = 'skkshqixozqsbdch'
    receivers = ['784858166@qq.com','694384337@qq.com','josephyuanpto@gmail.com','yangxinyi9612@gmail.com']
    for to_addr in receivers:
        msg = MIMEText(text,'plain','utf-8')
        msg['From'] = Header('Smart Home Service %s' % from_addr)
        msg['To'] = Header(to_addr)
        msg['Subject'] = Header('Notification')
        server = smtplib.SMTP_SSL(smtp_server)
        server.connect(smtp_server,465)
        server.login(from_addr,password)
        server.sendmail(from_addr,to_addr,msg.as_string())
    server.quit()
