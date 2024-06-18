---
head:
    - - meta
      - name: description
        content: Hướng dẫn deploy website ASP.NET
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# Deploy ASP.NET website

<OgImage name="Deploy ASP.NET website" />

<!-- https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-8.0&tabs=linux-ubuntu -->

## Website configuration

Suppose you have an ASP.NET website that you want to run under the domain `domain.com`

1. Go to [application store](../server/application.md), install the `ASP.NET` application

    ![](<../../images/docs/en/tutorial/deploy-asp-dotnet/Screenshot 2024-05-28 at 12.58.32.png>)

2. Create a website with the following configuration

    ![](<../../images/docs/vi/tutorial/deploy-asp-dotnet/Screenshot 2024-05-28 at 13.02.34.png>)

    - Enter domain
    - Select Proxy Port
    - Enter the port your ASP.NET application runs on, for example 3000

3. Install the source code for the website from git or upload it yourself

4. Update Database & Build & Publish

    Open the terminal for the website

    ![](<../../images/docs/vi/tutorial/deploy-asp-dotnet/Screenshot 2024-05-28 at 13.24.27.png>)

    ```bash
    dotnet ef database update
    dotnet build
    dotnet publish
    ```

5. Create Service for website

    Use the [Service management](../server/service.md) feature to create a service

    Create a service named `domain_com` (you can put domain_com or whatever you want, but note that it is short, easy to remember, no special characters)

    You can refer to the content of `domain_com` below

    ```ini{4}
    [Unit]
    Description=ASP.NET - domain.com

    [Service]
    WorkingDirectory=/home/flashvps/domain.com // [!code focus]
    ExecStart=/usr/bin/dotnet /home/flashvps/domain.com/bin/Debug/netcoreapp8.0/publish/domain_com.dll --urls "http://127.0.0.1:3000" // [!code focus ]
    Restart=always
    RestartSec=10
    KillSignal=SIGINT
    SyslogIdentifier=domain_com // [!code focus]
    User=flashvps // [!code focus]
    Environment=ASPNETCORE_ENVIRONMENT=Production
    Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

    [Install]
    WantedBy=multi-user.target
    ```

    ::: warning

    - Change `3000` to the proxy port you declared when creating the website before
    - Please change `domain.com` to the domain name corresponding to your website
    - `flashvps` is the user that the website is running on, please replace `flashvps` with the user that the website is running on (be careful not to set it as `root`)
    - `bin/Debug/netcoreapp8.0/publish/domain_com.dll` is the path to the dll file that `dotnet publish` creates
    - Linux has a case-sensitive file system. Setting `ASPNETCORE_ENVIRONMENT` to `Production` will result in searching for the configuration file `appsettings.Production.json`, not `appssettings.production.json`.
    - The colon separator (:) is not supported in environment variable names. Use double underscores (\_\_) instead of colons. The system will convert double underscores to colons when environment variables are read into the configuration. In the following example, the connection string key `ConnectionStrings:DefaultConnection` is placed in the service definition file as `ConnectionStrings__DefaultConnection`
        ```ini{4}
        Environment=ConnectionStrings__DefaultConnection={Connection String}
        ```

    :::

Visit the website to see the successful results!
