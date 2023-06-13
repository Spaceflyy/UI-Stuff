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

for (let i = 0; i < imagesSrc.length; i++) {
	const newImage = new Image();
	newImage.src = imagesSrc[i];
	newImage.setAttribute("id", i);
	images.push(newImage);
}
const imageSlider = () => {
	let currentImage = 0;
	const back = new Image();
	const next = new Image();
	const offset = 500;
	let currentpos = 0;
	back.src = navBack;
	next.src = navNext;

	const maxSlide = (images.length - 1) * -500;
	const minSlide = 0;
	const imagesContainer = document.createElement("div");
	images.forEach((img) => {
		imagesContainer.append(img);
	});

	imagesContainer.classList.add("imagesContainer");
	const sliderContainer = document.createElement("div");
	const imgWindow = document.createElement("div");
	const dotContainer = document.createElement("div");
	dotContainer.classList.add("dotContainer");

	const navContainer = document.createElement("nav");
	navContainer.classList.add("navContainer");

	sliderContainer.classList.add("sliderContainer");
	imgWindow.classList.add("imgWindow");

	for (let i = 0; i < images.length; i++) {
		const dot = document.createElement("div");
		dot.setAttribute("data-dot-number", i);
		dot.setAttribute("data-img-position", offset * -i);
		dot.classList.add("dot");
		dotContainer.append(dot);
	}

	const updateDotFill = () => {
		const dots = Array.from(document.getElementsByClassName("dot"));
		dots.forEach((dot) => {
			dot.classList.remove("dotFilled");
			if (currentImage === Number(dot.getAttribute("data-dot-number"))) {
				dot.classList.add("dotFilled");
			}
		});
	};

	const updateSlider = (slideAmount) => {
		const imgcontainer = document.querySelector(".imagesContainer");
		currentpos += slideAmount;
		imgcontainer.style.transform = `translate(${currentpos}px)`;
	};

	const setSliderPosition = (position) => {
		const imgcontainer = document.querySelector(".imagesContainer");
		currentpos = position;

		imgcontainer.style.transform = `translate(${currentpos}px)`;
	};

	const nextImage = () => {
		if (currentpos === maxSlide) {
			currentImage = 0;
			updateSlider(Math.abs(maxSlide));
		} else {
			currentImage += 1;
			updateSlider(-offset);
		}
		updateDotFill();
	};

	const previousImage = () => {
		if (currentpos === minSlide) {
			currentImage = images.length - 1;
			updateSlider(maxSlide);
		} else {
			currentImage -= 1;
			updateSlider(offset);
		}
		updateDotFill();
	};
	next.addEventListener("click", () => {
		nextImage();
	});

	back.addEventListener("click", () => {
		previousImage();
	});

	sliderContainer.addEventListener("click", (event) => {
		if (event.target.classList.contains("dot")) {
			setSliderPosition(Number(event.target.getAttribute("data-img-position")));
			currentImage = Number(event.target.getAttribute("data-dot-number"));
			updateDotFill();
		}
	});

	setInterval(() => {
		nextImage();
	}, 5000);

	navContainer.append(back);
	navContainer.append(next);
	imgWindow.append(imagesContainer);
	imgWindow.append(navContainer);
	sliderContainer.append(imgWindow);
	sliderContainer.append(dotContainer);

	return { sliderContainer, updateDotFill };
};
export default imageSlider();
