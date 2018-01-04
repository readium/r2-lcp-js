export interface IDeviceIDManager {
    getDeviceNAME(): string;

    getDeviceID(): string;

    checkDeviceID(key: string): string | undefined;

    recordDeviceID(key: string): void;
}
