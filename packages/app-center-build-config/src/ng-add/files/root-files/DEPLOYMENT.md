# Deployment

## App Center

We use App Center to actually build and distribute our application. This has been configured per environment and per platform.
All apps are managed in the [<%=appId%>](https://appcenter.ms/orgs/<%=appId%>/applications) App Center organization.
The `Env` should match a valid build target from the `angular.json` configuration.

| Env | Platform | AppId          | Distribution Channel                           | Distribution audience |
| --- | -------- | -------------- | ---------------------------------------------- | --------------------- |
| dev | Android  | <%=appId%>.dev | App Center                                     | Internal              |
| dev | iOS      | <%=appId%>.dev | App Center                                     | Internal              |
| tst | Android  | <%=appId%>.tst | App Center                                     | Internal              |
| tst | iOS      | <%=appId%>.tst | App Center                                     | Internal              |
| acc | Android  | <%=appId%>.acc | App Center                                     | Customer              |
| acc | iOS      | <%=appId%>.acc | App Center                                     | Customer              |
| prd | Android  | <%=appId%>     | Google Playstore (+ Alpha track for beta test) | Public                |
| prd | iOS      | <%=appId%>     | Apple App Store (+ Testflight for beta test)   | Public                |

Building the capacitor app with post-clone scripts with a common root script.

We use App specific `post-clone` scripts:

- [<%=iosPath%>](<%=iosPath%>/appcenter-post-clone.sh)
- [<%=androidPath%>](<%=androidPath%>/appcenter-post-clone.sh)

These scripts will run the script from the root directory. This root script contains the actual build and syncing steps:

- [appcenter-post-clone-root.sh](./appcenter-post-clone-root.sh)

> More info about the App Center scripts: [App Center post clone](https://docs.microsoft.com/en-us/appcenter/build/custom/scripts/#post-clone)
