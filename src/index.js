import dropDownMenu from "./dropdown";
import "./style.css";

const nav = document.createElement("nav");
nav.appendChild(
	dropDownMenu("Drop Down 1", "Menu Item 1", "Menu Item 2", "Menu Item 3")
);
nav.appendChild(
	dropDownMenu("Menu", "New Menu Item 1", "New Menu Item 2", "New Menu Item 3")
);

document.body.append(nav);
