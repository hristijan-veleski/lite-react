# lite-react - A Lightweight React Library (Beta)

![Version](https://img.shields.io/badge/version-0.1.0--beta-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Welcome to the "lite-react" library - a lightweight, minimalistic React library focused on providing essential features for your React applications while keeping it incredibly light. This library is currently in beta, so please feel free to test it out and provide your feedback.

## Installation

You can install "lite-react" using npm, yarn or pnpm:

Using npm:

```bash
npm i @vele-majstor/lite-react
```

Using yarn:

```bash
yarn add @vele-majstor/lite-react
```

Using pnpm:

```bash
pnpm i @vele-majstor/lite-react
```

## Usage

Before using the library you will need to import the css variables in your main.tsx or App.tsx file and then you can use the Library like this:

```js
import React, { useState } from "react";
import { Button } from "@vele-majstor/lite-react";

// CSS Variables
import "@vele-majstor/lite-react/dist/style.css";

const App = () => {
  return <Button severity="primary" label="Hello World" size="normal" />;
};

export default App;
```

## Storybook

You can check out my storybook [here](http://www.chromatic.com/library?appId=652ef0906dc3bc58efadad32)
