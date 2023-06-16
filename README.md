# wth-rctNtv
This is my project to create a react native app to check the waether

# Build

We use EAS to build relevant application in the correct platform

```
eas build --platform ios
```

Ensure you have a valid apple developer account and have the correct certificates and provisioning profiles.

# Test

We are using Playwright to test the Web compenent, and Applitools for image validation

```
npx playwright test
```

To update the images you can run 

```
npx playwright test --update-snapshots
```