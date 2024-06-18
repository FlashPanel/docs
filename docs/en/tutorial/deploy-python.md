---
head:
    - - meta
      - name: description
        content: Hướng dẫn deploy Python/Flask App
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# Deploy Python/Flask App

<OgImage name="# Deploy Python/Flask App" />

## Install Python, pip and other necessary packages

Open the terminal for the `root` user, run the command to install Python venv, only run once if this is your first time Deploy Python/Flask App

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-16 at 14.14.53.png>)

```bash
sudo apt install python3-venv -y
```

## Create website

Let's say your python application runs on port `1406`

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-12 164349.png>)

Point the website DNS to the server and [install SSL](../site/ssl.md)

## Create virtual environment

Open the terminal for the site, run the command to set up a virtual environment and activate it:

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-16 at 14.19.57.png>)

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install application dependencies

If you have a `requirements.txt` file in the source code, use the command below, otherwise install the packages manually

```bash
pip install -r requirements.txt
```

## Use Gunicorn to deploy

### Reasons to use `gunicorn`

Gunicorn (Green Unicorn) is a WSGI (Web Server Gateway Interface) HTTP server for Python applications. It is designed to serve Python web applications in production environments, providing better concurrency and load management than just using Flask's built-in server.

### Install `gunicorn`

```bash
pip install gunicorn
```

### Test Your Application

Run your application to make sure it works:

```bash
gunicorn --bind 0.0.0.0:1406 app:app
```

In the command `gunicorn --bind 0.0.0.0:1406 app:app`, the `app:app` part means:

1. **Application file name**: The part before the colon (`:`) is the name of the Python file containing your Flask application. In this case, the Python file is `app.py`.
2. **Application object name**: The part after the colon (`:`) is the name of the Flask application object in that Python file. In this case, the application object is `app`.

Combined, `app:app` tells Gunicorn that:

-   Find the `app.py` file.
-   In the `app.py` file, find the Flask object named `app`.

Gunicorn will:

1. Open the `app.py` file.
2. Find the Flask object defined as `app`.
3. Run the Flask application using Gunicorn, listening on all IP addresses (`0.0.0.0`) on port `1406`.

### Set up Systemd service

Use the [Systemd Service management](../server/service.md) feature to run gunicorn without having to hold a terminal.

Reference configuration is as follows:

```ini
[Unit]
Description=domain.com web application
After=network.target

[Service]
User=flashvps
WorkingDirectory=/home/flashvps/domain.com
Environment="PATH=/home/flashvps/domain.com/venv/bin"
ExecStart=/home/flashvps/domain.com/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:1406 app:app

[Install]
WantedBy=multi-user.target
```

::: warning

1. You should change `/home/flashvps/domain.com` to the path to your respective website directory.
2. `--workers 3`: This option specifies the number of worker processes Gunicorn will use. Here, it is configured to use 3 worker processes. Worker processes help Gunicorn handle multiple requests simultaneously, improving application performance.

3. `--bind 0.0.0.0:1406`: This option specifies the IP address and port on which Gunicorn will listen. `0.0.0.0` means listen on all server IP addresses, and `1406` is the port that will be used. This allows the application to be accessible from any IP address on port `1406`.

:::

Your Python application will now be deployed and accessible through your server's IP address or domain.
