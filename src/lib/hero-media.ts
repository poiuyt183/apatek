const CLOUDINARY_BASE =
  "https://res.cloudinary.com/bedding-shop/video/upload";

const HERO_VIDEO_ID = "v1781694254/AdobeStock_653184665_hn3oiv";

/** Full HD delivery for sharp playback on desktop + Retina (~66% hero panel) */
export const HERO_VIDEO_URL = `${CLOUDINARY_BASE}/q_auto:good,f_auto,w_2560/${HERO_VIDEO_ID}.mp4`;

/** First-frame poster while video buffers */
export const HERO_VIDEO_POSTER = `${CLOUDINARY_BASE}/so_0,q_auto:good,f_auto,w_2560/${HERO_VIDEO_ID}.jpg`;
