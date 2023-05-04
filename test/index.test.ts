import { describe, it } from "vitest";
import { fromLatLon, toLatLon } from "../src";

describe("wgs 84", () => {
  it("test1", () => {
    // 339145 5.06665e+06
    const x = 132.93249308340933;
    const y = 45.734655020259765;
    const res = fromLatLon(y, x);
    console.log(res);
    const res2 = toLatLon(res.easting, res.northing, res.zoneNum);
    console.log(res2);
  });
});
