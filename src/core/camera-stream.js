/**
 * Drishti AI - Low-Latency Camera Stream Handler
 * Manages video feed, downsampling, and frame capture buffers
 */

export class CameraStream {
  constructor(videoElement) {
    this.video = videoElement;
    this.stream = null;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.isStreaming = false;
    this.currentWidth = 640;
    this.currentHeight = 480;
  }

  async start() {
    try {
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 15, max: 20 }
        },
        audio: false
      };

      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.video.srcObject = this.stream;
      await this.video.play();

      this.currentWidth = this.video.videoWidth || 640;
      this.currentHeight = this.video.videoHeight || 480;
      this.canvas.width = this.currentWidth;
      this.canvas.height = this.currentHeight;

      this.isStreaming = true;
      return true;
    } catch (err) {
      console.warn('Camera access unavailable or simulated:', err.message);
      this.isStreaming = false;
      return false;
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    this.isStreaming = false;
  }

  /**
   * Captures the current video frame as an ImageData buffer
   * @param {number} targetWidth - Optional downsampling width
   * @param {number} targetHeight - Optional downsampling height
   * @returns {ImageData|null}
   */
  captureFrame(targetWidth = 320, targetHeight = 240) {
    if (!this.isStreaming || this.video.readyState < 2) {
      // If camera not ready, return a neutral fallback canvas
      this.canvas.width = targetWidth;
      this.canvas.height = targetHeight;
      return this.ctx.createImageData(targetWidth, targetHeight);
    }

    this.canvas.width = targetWidth;
    this.canvas.height = targetHeight;
    this.ctx.drawImage(this.video, 0, 0, targetWidth, targetHeight);
    return this.ctx.getImageData(0, 0, targetWidth, targetHeight);
  }

  /**
   * Captures the current frame as a JPEG Base64 data string (for live cloud benchmark)
   * @param {number} quality - 0.0 to 1.0 JPEG quality
   * @returns {string} base64 data URL
   */
  captureJpegBase64(quality = 0.6) {
    if (!this.isStreaming || this.video.readyState < 2) {
      // Fallback 1x1 test image
      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";
    }
    this.canvas.width = 480;
    this.canvas.height = 360;
    this.ctx.drawImage(this.video, 0, 0, 480, 360);
    return this.canvas.toDataURL('image/jpeg', quality);
  }
}
