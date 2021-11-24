const key = "AIzaSyD7lWkx3KdQMiw_YdPvGvfGS9bYMxMX5ik";

export const G_API_URL = `https://maps.googleapis.com/maps/api/js?key=${key}&&v=3.exp&libraries=geometry,drawing,places`;

const convertTolatLng = (latLng, title) => {
  return {
    latLng,
    title
  };
};

export const locationsList = {
  Urb: convertTolatLng("3.5477866452492877, -76.2961951880162", "Urb"),
  UAO:convertTolatLng("3.3537324988032293, -76.52302337667167","UAO"),
  Casa:convertTolatLng("3.5259638160945825, -76.30415921395483","Casa")

};
