import React ,{useState,useEffect} from 'react'
import './App.css';
//data fatching
function App() {

  const [data, setData] = useState([])

const getData= ()=>{
   fetch('data.json', {headers: {
   'Content-Type': 'application/json',
   'Accept': 'application/json'
   }}).then((response)=>{

return response.json()
 }).then((myjson)=>{

console.log(data)
setData(myjson)
 })
} 
useEffect(()=>{
getData()
},[])


//appling filter
var tabs = document.querySelectorAll(".tabs_wrap ul li");
var subscriptions = document.querySelectorAll(".subscription");
var burners = document.querySelectorAll(".burner");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "subscription"){
			subscriptions.forEach((subscription)=>{
				subscription.style.display = "block";
			})
      
		}
		else if(tabval == "burner"){
			burners.forEach((burner)=>{
				burner.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}

	})
})

   return (
    <div>
    <div className="App">
      <header className="App-header">

        <div class="wrapper">
        <div class="title">
          Card Tabs 
        </div>
        <div class="tabs_wrap">
          <ul>
            <li data-tabs="both" >All</li>
            <li data-tabs="subscription">Subscription</li> 
            <li data-tabs="burner"  class="active" >Burner</li>
           
          </ul>

        </div>
        <div class="container">
         <div>
      { data && data.length > 0 && data.map((val, index)=>{


        // if(val.card_type == "subscription"){
        //   <div class="subscription">s</div>}
          
         return (
        <div>
      <li class="item_wrap ">
              <div class="item">
                <div class="item_left">
                  <div class="img">
                  <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="Profile Photo"/>
                  </div>
                  <div class="data">
                    <p class="name" key = {val.id}>{val.name}</p>
                    <p class="OwnerId"key = {val.id}>ID: {val.owner_id}</p>
                    <p class="budget_name"key = {val.id}>{val.budget_name}</p>
                    <p class="available_to_spend"key = {val.id}>Available: {val.available_to_spend.value} {val.available_to_spend.currency}</p>
                    <p class="spend"key = {val.id}>Spend:  {val.spend.value} {val.spend.currency}</p>
                    <div class="CardType" key = {val.card_type}> </div>
                  </div>
                </div>
                <div class="item_right">
                  <div class="limits" key = {val.id}>{val.limit}</div> 
                  <div class="status" key = {val.id}>{val.status}</div>
                  

                </div>
              </div>
            </li>
       </div>
      )}
      )
   }  

    </div>
        </div>
      </div>
      </header>
    </div>
    </div>

  );
}

export default App;
