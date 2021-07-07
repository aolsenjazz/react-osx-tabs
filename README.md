<h1 align="center">react-osx-tabs</h1>
<h3 align="center">Ultra simple, lightweight  OSX tabs</h3>
</br></br>
<!-- insert gif -->
</br>

Built with [electron](https://www.electronjs.org/) in mind, react-osx-tabs is intended to be a visual clone of OSX fixed-length tab layouts. react-osx-tabs is ultra-simple and therefore doesn't allow for any customization (the purpose is to fit in anyways, right? 😉).

## Usage

### add to project

```shell
yarn add @alexanderolsen/react-osx-tabs
```

### use in project

OsxTabs will fill its parent's width and height; the easiest way to achieve proper layout is to style its container.

```js
import OsxTabs from '@alexanderolsen/react-osx-tabs'

function App() {
  const body1 = <div>Hello from Tab Body 1!</div>;
  const body2 = <div>Hello from Tab Body 2!</div>;
  const body3 = <div>Hello from Tab Body 3!</div>;

  const labels = ['One', 'Two', 'Three']
  const bodies = [body1, body2, body3];

  return (
    <div className="App" style={{width: '300px'; height: '300px'}}>
      <OsxTabs tabLabels={labels} tabBodies={bodies} />
    </div>
  );
}
```

## Build locally

```shell
git clone https://github.com/aolsenjazz/react-osx-tabs
cd react-osx-tabs
yarn
yarn start
```

## Contributing

Pull requests are welcome.

## License

License available in `LICENSE.txt`.
