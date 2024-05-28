# utm-projection

## LatLng to UTM converter vice versa

[![npm version](https://img.shields.io/npm/v/utm-projection?color=yellow)](https://npmjs.com/package/utm-projection)
[![npm downloads](https://img.shields.io/npm/dm/utm-projection?color=yellow)](https://npmjs.com/package/utm-projection)


## Usage

Install package:

```sh
# ✨ Auto-detect
npx nypm install utm-projection

# npm
npm install utm-projection

# yarn
yarn add utm-projection

# pnpm
pnpm add utm-projection

# bun
bun add utm-projection
```

Example

```ts
import { fromLatLon, toLatLon } from "utm-projection";
const x = 132.93249308340933;
const y = 45.734655020259765;

/**
 * WGS84 to UTM
 * res = {
  easting: 339145.47167257813,
  northing: 5066645.291212298,
  zoneNum: 53,
  zoneLetter: 'T'
}
 */
const res = fromLatLon(y, x);

/**
 * UTM to WGS84
 * res2 = { latitude: 45.73465500583696, longitude: 132.93249254427462 }
 */
const res2 = toLatLon(res.easting, res.northing, res.zoneNum);
```


## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/unjs/utm-projection/blob/main/LICENSE) license. 💛
