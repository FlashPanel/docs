---
head:
    - - meta
      - name: description
        content: Instructions for deploying SerpBear
---

# Deploy SerpBear

1. Install the `docker` application in the server's applications tab

2. Create a proxy website port to port `4444` (this port is up to you to decide)

![create website deploy SerpBear](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.32.31.png>)

Proceed with [SSL installation](../site/ssl.md) for this website

3. Open the file manager for the server (not the site)

Proceed to create the file `serpbear/docker-compose.yaml`

![create docker-compose.yaml file](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.35.10.png>)

4. Open the newly created `docker-compose.yaml` file

![open docker-compose.yaml file](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.38.12.png>)

5. Enter content for the `docker-compose.yaml` file

```yaml
version: "3.8"

services:
    app:
        image: towfiqi/serpbear
        restart: unless-stopped
        ports:
            - 4444:3000 # [!code warning]
        environment:
            - USER=admin # [!code warning]
            - PASSWORD=0123456789 # [!code warning]
            - SECRET=4715aed3216f7b0a38e6b534a958362654e96d10fbc04700770d572af3dce43625dd # [!code warning]
            - APIKEY=5saedXklbslhnapihe2pihp3pih4fdnakhjwq5 # [!code warning]
            - SESSION_DURATION=24
            - NEXT_PUBLIC_APP_URL=https://your-domain.com # [!code warning]
        volumes:
            - serpbear_appdata:/app/data
networks:
    my-network:
        driver: bridge
volumes:
    serpbear_appdata:
```

Note for configuring the following colored lines:

-   `4444:3000`: `3000` is fixed and you should not change it, `4444` is the port of the serpbear website that you decided to create in step 2
-   `USER`: The username you want to use to log in to the application. for example: `admin`
-   `PASSWORD`: The password you want to use to log in to the application. For example: `0123456789`
-   `SECRET`: The secret key will be used to encrypt 3rd party API keys and passwords. e.g. `4715aed3216f7b0a38e6b534a958362654e96d10fbc04700770d572af3dce43625dd`
-   `APIKEY`: The API key that will be used to access the application's API. for example: `5saedXklbslhnapihe2pihp3pih4fdnakhjwq5`
-   `SESSION_DUration`: Duration (in hours) of the user's login session. e.g. `24`
-   `NEXT_PUBLIC_APP_URL`: The URL where your app is stored and accessible. for example: `http://123.123.123.123:4444` or `https://your-domain.com`

6. Launch the application

![run serpbear](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.58.48.png>)

Open the terminal server and run the following command:

```bash
cd /root/serpbear
docker compose up -d
```

7. Restart the container (if so, edit the file `serpbear/docker-compose.yaml`)

Open the terminal server and run the following command:

```bash
docker ps
```

You will now see a list of running containers.

Find a line with `serpbear` information and get the container ID of that line.

Run the docker restart command to reload new information

```bash
docker restart container_id
```
