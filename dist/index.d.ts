/**
 * UTM坐标转WGS84坐标
 * @param easting
 * @param northing
 * @param zoneNum utm带号
 * @param zoneLetter
 * @param northern
 * @param strict
 * @returns
 */
declare function toLatLon(easting: number, northing: number, zoneNum: number, zoneLetter?: string | null, northern?: boolean, strict?: boolean): {
    latitude: number;
    longitude: number;
};
/**
 * WGS84坐标转UTM坐标
 * @param latitude
 * @param longitude
 * @param forceZoneNum
 * @returns
 */
declare function fromLatLon(latitude: number, longitude: number, forceZoneNum?: number): {
    easting: number;
    northing: number;
    zoneNum: number;
    zoneLetter: string | null;
};

export { fromLatLon, toLatLon };
