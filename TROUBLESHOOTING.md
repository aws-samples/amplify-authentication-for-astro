# Troubleshooting

If you see this error

```
✖ Zipping artifacts failed. This is often due to an invalid distribution directory path. Run "amplify configure project" to check if your Distribution Directory is pointing to a valid path.
🛑 Please ensure your build artifacts path exists.
```

Then run `amplify configure project` and ensure that your `Distribution Directory Path:` is set to dist
