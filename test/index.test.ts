import { describe, it, expect } from "vitest";
import { fromLatLon, toLatLon } from "../";

describe("wgs84 to utm", () => {
  it("测试wgs84坐标到utm坐标相互转换", () => {
    // 339145 5.06665e+06
    const x = 132.93249308340933;
    const y = 45.734655020259765;
    const utm_coord = fromLatLon(y, x);
    const wgs_coord = toLatLon(
      utm_coord.easting,
      utm_coord.northing,
      utm_coord.zoneNum
    );
    expect(wgs_coord.longitude).toBeCloseTo(x, 5);
    expect(wgs_coord.latitude).toBeCloseTo(y, 5);
  });
});
