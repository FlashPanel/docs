# Rclone WebUI

This is a ReactJS based web UI for the rclone cli project

![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 13.15.19.png>)

![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 13.15.48.png>)

1. To use `Rclone Web UI` you need to install `Rclone` in the server application

    ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.31.09.png>)

2. Go to the `Supervisor` page > click `New Supervisor`
   ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.32.37.png>)

3. Configure Supervior as shown below
   ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.32.28.png>)

    The command you enter is as follows

    ```bash
    rclone rcd --rc-web-gui --rc-web-gui-no-open-browser --rc-user admin --rc-pass password --rc-addr :5572
    ```

    replace `admin` and `password` with the user and password respectively

4. Here you can access Rclone Web UI in 2 ways `open port 5572` or `proxy via domain name`.

    1. To open port 5572, see [instructions for using Firewall Rule](../server/firewall-rule.md), after opening port, go to `http://ip-may-chu:5572`

    2. To `proxy via domain name`, create a website and configure it as shown below
       ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.37.48.png>)

Finished!
