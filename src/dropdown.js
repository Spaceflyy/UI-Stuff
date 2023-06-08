import downArrow from "./imgs/icons/downArrow.svg";

const dropDownMenu = (menuText, ...subMenuItems) => {
	const menuItems = Array.from(subMenuItems);
	const myArrow = new Image();
	myArrow.src = downArrow;

	const dropDown = document.createElement("div");
	dropDown.classList.add("dropDown");

	const dropDownBtn = document.createElement("button");
	dropDownBtn.classList.add("dropDownBtn");
	dropDownBtn.textContent = `${menuText}`;
	dropDownBtn.append(myArrow);
	const menuContent = document.createElement("div");
	menuContent.classList.add("menuContent");
	menuItems.forEach((item) => {
		const link = document.createElement("a");
		link.textContent = item;
		menuContent.append(link);
	});
	dropDown.appendChild(dropDownBtn);
	dropDown.appendChild(menuContent);

	dropDown.addEventListener("mouseover", () => {
		menuContent.style.display = "flex";
	});

	dropDown.addEventListener("mouseout", () => {
		menuContent.style.display = "none";
	});

	return dropDown;
};

export default dropDownMenu;
