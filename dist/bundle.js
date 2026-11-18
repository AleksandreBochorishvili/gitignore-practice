export function createRenderBundle(device, pipeline, bindGroup) {
    const encoder = device.createRenderBundleEncoder({
        colorFormats: ["bgra8unorm"],
    });

    encoder.setPipeline(pipeline);
    encoder.setBindGroup(0, bindGroup);
    encoder.draw(3);
    return encoder.finish();
}