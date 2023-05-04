# UTM 坐标转换工具

```typescript
import { fromLatLon, toLatLon } from "utm-projection";
const x = 132.93249308340933;
const y = 45.734655020259765;

/**
 * 经纬度转UTM
 * res = {
  easting: 339145.47167257813,
  northing: 5066645.291212298,
  zoneNum: 53,
  zoneLetter: 'T'
}
 */
const res = fromLatLon(y, x);

/**
 * UTM转经纬度
 * res2 = { latitude: 45.73465500583696, longitude: 132.93249254427462 }
 */
const res2 = toLatLon(res.easting, res.northing, res.zoneNum);
```
