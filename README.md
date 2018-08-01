# nightwatch-example

# Install 
```
npm install
```
## Run

### chrome
```
./nightwatch
```

### chrome-headless

```
./nightwatch -e chrome-headless
```

## Test results are stored in /reports

# iOS testing

Using Appium - in order to run tests against, you will need Xcode installed, to use the simulators.

Prequisistes:
XCode 9.2+

There are enough emulators that come with XCode package, but to install, you will need to open from Xmcode app:

* Xcode > Open Developer Tool > Simulator
* In Simulator go to: Hardware > Device > Manage Devices
* In devices window at the bottom of the left column, click the Add button (+)
* Now follow the dialog.

To run:

$ npm install -g 
$ appium
[NEW CONSOLE TAB]

```
./nightwatch -e ios --tag pageObject
```