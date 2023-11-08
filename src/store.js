import { proxy } from "valtio";

const state = proxy({
  intro: true,
  selectedColor: "#ccc",
  colors: ["#ccc", "#efbd4e", "#80c670", "#726de8", "#ef674e", "#353934"],
  decals: ["react", "three2", "pmndrs"],
  selectedDecal: "three2"
});

export { state };
