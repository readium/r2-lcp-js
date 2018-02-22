export interface IDeviceIDManager {
    getDeviceNAME(): Promise<string>;

    getDeviceID(): Promise<string>;

    checkDeviceID(key: string): Promise<string | undefined>;

    recordDeviceID(key: string): Promise<void>;
}
