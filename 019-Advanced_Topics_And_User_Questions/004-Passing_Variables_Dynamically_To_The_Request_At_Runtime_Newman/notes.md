# Passing Variables Dynamically To The Request At Runtime Newman

- Use `--global-var` flag in Newman CLI to pass dynamic variables at runtime
- Multiple variables can be passed by repeating the `--global-var` flag
- Variables passed via CLI can be used in Postman requests using `{{variableName}}` syntax
- Useful when the host URL changes per environment (cloud, dynamic resources, CI/CD)

---

## CLI Usage

```bash
newman run my-collection.json --global-var "machineName=mymachine1234" --global-var "machinePort=8080"
```

## In Postman Request URL

```text
https://{{machineName}}:{{machinePort}}
```
