# **Semantic Versioning System** #

# Version Sestem: **1.0.0**

| **Version Type**  | **Description** |
|-------------------|----------------|
| **Major Version** | 🔸 Breaking change, e.g., a rebrand, feature set added |
| **Minor Version** | 🔹 Non-breaking, noteworthy change, e.g., new component, updated styles |
| **Patch Version** | ✅ Small request or bug fix, e.g., update or edit existing elements |

### 📌 Breakdown:
- **1** → 🔥 Major Update (big breaking changes, e.g. a rebrand feature set added)
- **0** → 🎯 Minor Update (new features without breaking)
- **0** → 🛠 Patch Update (small request or bug fixes, improvements)

*Note:* Most of the npm packages use Semantic Versioning System or SemVer. Some packages like typeScript, react-native don't follow it.


# Dependency Version Symbols in Package.json

| Symbol  | Meaning                           | Example                    | Resolved To                    |
|---------|-----------------------------------|----------------------------|--------------------------------|
| `1.0.0` | Exact version                    | `"express": "1.0.0"`       | `1.0.0` only                   |
| `^`     | Minor updates allowed            | `"express": "^1.2.3"`      | `1.2.3 → 1.3.x` but **not 2.0.0** |
| `~`     | Patch updates allowed            | `"express": "~1.2.3"`      | `1.2.3 → 1.2.9` but **not 1.3.0** |
| `-`     | Range between versions           | `"express": "1.2.3 - 2.3.4"` | `>=1.2.3` and `<=2.3.4` |
| `>`     | Greater than                     | `"express": ">1.2.3"`      | Any version above `1.2.3` |
| `<`     | Less than                        | `"express": "<2.0.0"`      | Any version below `2.0.0` |
| `>=`    | Greater than or equal to         | `"express": ">=1.2.3"`     | `1.2.3` and above |
| `<=`    | Less than or equal to            | `"express": "<=2.3.4"`     | `2.3.4` and below |
| `||`    | Logical OR (multiple versions)   | `"express": "^1.2.3 || ^2.0.0"` | `1.2.x` **or** `2.x.x` |
| `x`     | Wildcard for any matching version | `"express": "1.2.x"`       | Any `1.2.x` version |
| `*`     | Any version available            | `"express": "*"`           | Latest version |
| `latest`| Always installs the newest       | `"express": "latest"`      | Always the latest version |
