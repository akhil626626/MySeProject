exports.passwordReset = (link, name) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://ibb.co/5Fx3d7C"> 
				<img src="https://i.ibb.co/hf1Nkqr/54ab2eed-a35f-459d-a0d9-92e196c9b891.jpg" alt="54ab2eed-a35f-459d-a0d9-92e196c9b891" border="0">
			</a>
            <div class="message">Password Reset Link</div>
            <div class="body">
                <p>Hey ${name},</p>
                <p>Your password reset link is <span class="highlight">${link}</span>.
                </p>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>
            <div class="support">If you have any questions or need further assistance, please feel free to reach out to us
                at
                <a href="mailto:info@clarkton.com">info@clarkton.com</a>. We are here to help!
            </div>
        </div>
    </body>
    
    </html>`;
};