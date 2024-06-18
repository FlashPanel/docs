---
position: 999
---

# Cookbook

<!-- ## Deployment site stuck
Rarely, your application may be stuck in the 'in progress' state. When this happens, you can reset the deployment status at the bottom right of the site dashboard using the Self-Help drop-down menu. -->

## Use user isolation with existing sites

Currently, isolated users cannot be used to manage existing sites that have been created with the user isolation option turned off. Instead, you will need to create a new site with the user quarantine option enabled.

## Uncommitted Commitments During Deployment

This error can occur when files under source control in the site directory have been changed by the application and will be overwritten by the new deployment.

To fix this, you should SSH into your website directory and run the following command to discard the changes:

`git reset --hard && git clean -df`

You should also review your application and fix any parts of the application that may be writing to a source controlled directory on your server. Otherwise, you may continue to encounter this error in subsequent deployments.
