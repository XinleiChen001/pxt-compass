/**
 * 自定义积木 - 跳过Compass校准（实验性）
 */
//% weight=100 color=#0fbc11 icon="\u26F9"
namespace skipcal {
    
    /**
     * 禁用指南针的自动校准（⚠️ 实验性质）
     */
    //% block="跳过指南针校准"
    export function skipCompassCalibration(): void {
        // 非官方方式：尝试覆盖校准状态
        if (control.deviceDalVersion()) {
            // micro:bit v2
            control.internalOnEvent(3110, 3104, () => {});
        } else {
            // micro:bit v1
            control.internalOnEvent(11, 4, () => {});
        }
        basic.showIcon(IconNames.Yes)
    }
}
