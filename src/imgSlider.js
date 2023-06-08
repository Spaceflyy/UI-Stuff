import navBack from "./imgs/icons/navBack.svg";
import navNext from "./imgs/icons/navNext.svg";

import blossom from "./imgs/blossom.jpg";
import building from "./imgs/building.jpg";
import leaves from "./imgs/leaves.jpg";
import road from "./imgs/road.jpg";
import sky from "./imgs/sky.jpg";
import stars from "./imgs/stars.jpg";

const imagesSrc = [blossom, building, leaves, road, sky, stars];
const images = [];

imagesSrc.forEach((img) => {
	const newImage = new Image();
	newImage.src = img;

	images.push(newImage);
});

const imageSlider = () => {
	const back = new Image();
	const next = new Image();
	const offset = 500;
	let currentpos = 0;
	back.src = navBack;
	next.src = navNext;

	const imagesContainer = document.createElement("div");
	images.forEach((img) => {
		imagesContainer.append(img);
	});

	imagesContainer.classList.add("imagesContainer");
	const sliderContainer = document.createElement("div");
	const imgWindow = document.createElement("div");

	const navContainer = document.createElement("nav");
	navContainer.classList.add("navContainer");

	sliderContainer.classList.add("sliderContainer");
	imgWindow.classList.add("imgWindow");

	next.addEventListener("click", () => {
		const imgcontainer = document.querySelector(".imagesContainer");
		imgcontainer.style.transform = `translate(${currentpos - offset}px)`;
		currentpos -= offset;
	});

	navContainer.append(back);
	navContainer.append(next);
	imgWindow.append(imagesContainer);
	imgWindow.append(navContainer);
	sliderContainer.append(imgWindow);
	return sliderContainer;
};
export default imageSlider;
