import dropDownMenu from "./dropdown";
import imgSlider from "./imgSlider";
import "./style.css";

const nav = document.createElement("nav");
nav.appendChild(
	dropDownMenu("Drop Down Menu 1", "Menu Item 1", "Menu Item 2", "Menu Item 3")
);
nav.appendChild(
	dropDownMenu(
		"Drop Down Menu 2",
		"New Menu Item 1",
		"New Menu Item 2",
		"New Menu Item 3"
	)
);

document.body.append(nav);
document.body.append(imgSlider.sliderContainer);
imgSlider.updateDotFill();
