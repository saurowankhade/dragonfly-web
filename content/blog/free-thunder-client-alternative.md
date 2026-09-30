---
title: "A Free Thunder Client Alternative for VS Code"
description: "Looking for a free Thunder Client alternative? Dragonfly is a REST API client for VS Code with no paid tier. Import your Thunder Client collections in one step."
date: 2026-09-30
tags: [thunder-client, vs-code, api-testing]
draft: false
---

If you want a free Thunder Client alternative that still runs inside VS Code, try Dragonfly. It is a REST API client with no paid tier and no account, and it imports your Thunder Client collections and environments in one step.

This guide covers why people look for an alternative, how Dragonfly compares, and how to move your requests over in a few minutes.

## Why people look for a Thunder Client alternative

Thunder Client is a good tool. It made testing APIs inside VS Code popular, and many developers still use it every day.

The reason people start looking is usually the plan, not the product. Thunder Client has changed its free version several times since 2024. Today the extension has paid plans starting at $3 per user per month, and features like the CLI, team features and collection runs are part of those plans.

That is a fair way to run a business. But if you only want to send requests to your own API while you code, you may not want to track which features are free this year. You just want a client that stays free.

## What Dragonfly is

Dragonfly is the API client for VS Code that reads your code. It lives in the Activity Bar, next to your files, and does the everyday work you expect from an API client:

- Build a request with a method, URL, params, headers, body and auth, then press Send.
- Save requests in collections and folders.
- Use environments with `{{variables}}`, and switch between them in one click.
- Copy any request as cURL, Node.js, Python, Go, PHP, Java or Rust.
- See every request you sent in the history.

It is free, with no paid tier. There is no account and no sign in. Your collections, environments and history stay on your machine, and tokens go into VS Code secure storage instead of a JSON file.

## The part Thunder Client does not do

Most API clients start empty. You open a new request and type the URL yourself, even though you already wrote that route in your code.

Dragonfly starts from your code. If your API is built with Express or Next.js, run **Scan Workspace for Routes** and Dragonfly reads your project, finds your routes and turns them into a collection you can send right away. The folders follow your project layout, so you find each request where you would expect it.

Say your project has this file:

```js routes/users.js
router.get("/api/users", listUsers);
router.post("/api/users", createUser);
router.get("/api/users/:id", getUser);
router.patch("/api/users/:id", updateUser);
```

After a scan, you get four requests ready to send:

```http
GET    /api/users
POST   /api/users
GET    /api/users/:id
PATCH  /api/users/:id
```

Add a new route later, scan again, and the collection updates. For Next.js, it works with both the App Router and the Pages Router.

## Dragonfly vs Thunder Client at a glance

| | Dragonfly | Thunder Client |
| --- | --- | --- |
| Runs inside VS Code | Yes | Yes |
| Builds requests by reading your Express and Next.js code | Yes | No |
| Collections organized like your project | Yes | No |
| Environments with variables | Yes | Yes |
| Free, with no paid tier | Yes | No, paid plans from $3 per user per month |

For a longer breakdown, see [Dragonfly vs Thunder Client](/vs/thunder-client).

## How to move from Thunder Client to Dragonfly

### 1. Install Dragonfly

Open Quick Open in VS Code with `Cmd+P` on macOS or `Ctrl+P` on Windows and Linux, paste this and press Enter:

```text Quick Open
ext install saurabhwankhade.dragonfly
```

You can also install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly).

### 2. Export from Thunder Client

In Thunder Client, open the menu on the collection you want to move and choose **Export**. Save the file somewhere easy to find. Do the same for any environments you use.

### 3. Import into Dragonfly

Open the Command Palette with `Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows and Linux, run **Import Collection** and pick the file you exported. Dragonfly detects the format for you.

Your folders, requests, headers, query params and bodies come across. Environments are imported too, so a `{{baseUrl}}` in your requests works right away.

### 4. Add your secrets back

Dragonfly does not import live credentials, on purpose. Open a request, set its auth type (Bearer Token, API Key or Basic Auth) and add your token, key or password again. It is stored in VS Code secure storage, not in the collection file.

### 5. Scan your project (optional)

If your API uses Express or Next.js, run **Scan Workspace for Routes**. Any route you never saved in Thunder Client now shows up as a request too.

## When Thunder Client is still the better pick

Dragonfly is focused on one job: testing the endpoint you are working on, right next to your code. It is not the right tool for everything.

Stay with Thunder Client, or another paid tool, if:

- Your team needs to share and sync collections. Dragonfly does not have team sync yet. It is on the roadmap.
- You run collections as automated test suites in CI.
- You need WebSocket, SSE or gRPC requests.

If you mostly send REST requests to your own API while you build it, Dragonfly covers that for free.

## Questions

### Is Dragonfly really free?

Yes. There is no paid tier, no account and no trial. Everything it does today is free.

### Can I import my Thunder Client collections?

Yes. Run **Import Collection** and pick your exported file. Collections and environments come across. Live credentials do not, so add those back after importing.

### Does Dragonfly work without an internet connection?

Dragonfly does not need an account or a server, and your data stays on your machine. Your requests still need to reach the API you are testing, so a local API works offline and a remote one needs a connection.

### Which frameworks does route scanning support?

Express and Next.js, including the App Router and the Pages Router. For any other framework, import an OpenAPI or Swagger spec, a Postman, Thunder Client or Insomnia collection, a HAR file, or a cURL command.

### Where are my requests stored?

In VS Code storage on your machine. Tokens and passwords go into VS Code secure storage. Nothing is sent to a Dragonfly server, because there is no Dragonfly server.

## Try it

Dragonfly takes a minute to install, and your Thunder Client collections come with you. [Install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly), or read the [docs](https://docs.usedragonfly.xyz/) first.
