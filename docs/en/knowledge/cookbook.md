---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Cookbook

## Scheduled job Not running

It's important to note that just one misconfigured scheduled job will break all the jobs in the scheduler. You should verify that your frequency and commands are correct by using a tool such as [Crontab.guru](https://crontab.guru/).

## The SSH firewall rule is removed

If you have removed the firewall rule (usually port 22) from the `{{ data.name }}` user interface or directly on the server, `{{ data.name }}` will not be able to connect to server and will not be able to recreate this rule for you.

To fix this, you will need to access the server directly through your provider and manually re-add the SSH port. DigitalOcean allows you to connect remotely through their control panel.

`{{ data.name }}` uses `ufw` for the firewall, so once you're connected to the server, you need to run the following as `root`:

```bash
ufw allow 22
```

Where 22 is the server's current SSH port value
