import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
const linkElement = screen.getByText(/learn react/i);
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const actives = document.querySelectorAll(".active");
const expirys = document.querySelectorAll(".expiry");
const all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		const tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "active"){
			actives.forEach((active)=>{
				active.style.display = "block";
			})
		}
		else if(tabval == "expiry"){
			expirys.forEach((expiry)=>{
				expiry.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}

	})
})
  expect(linkElement).toBeInTheDocument();
  expect(actives).toBeInTheDocument();
});
