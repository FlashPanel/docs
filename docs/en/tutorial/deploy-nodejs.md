# Deploy NodeJS website

Suppose you have a nodejs website that you want to run under domain `api.domain.com`

1. Make sure the two applications `NodeJS` and `PM2` are installed on the server
2. Create a website with the following configuration

    ![](<../../images/docs/vi/tutorial/deploy-nodejs/Screenshot 2024-05-20 at 19.35.05.png>)

    - Enter domain
    - Select Proxy Port
    - Enter the port your nodejs application runs on, for example 3000

3. Install the source code for the website from git or upload it yourself
4. At local level, start nodejs with the command `node indexjs`
   Then in the production environment, I run the command
   `pm2 start index.js --name my-api`
   ![](<../../images/docs/vi/tutorial/deploy-nodejs/Screenshot 2024-05-20 at 19.38.34.png>)
5. Next time you update new code, you just need to run the command again
   `pm2 restart my-api`
