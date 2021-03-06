const RenderTest = () =>{ console.log("sub-component render test"); return false; }
const App = ({model}) => {     
   return  ( 
     <div class="flex-details debug">
          <div class="sidebar debug" ><SidebarPresenter  model={model}/></div>
          <Show hash="#details"><div class="details debug"><DetailsPresenter model = {model} /></div></Show>
          <Show hash="#search"><div class="debug"><SearchPresenter  model={model} /></div></Show>
          <Show hash="#summary"><div class="mainContent debug"><SummaryPresenter  model={model} /></div></Show>
          <RenderTest />
     </div>  
    );
}

const defaultRoute = () => {
     if(["#search", "#summary", "#details"]
     .find((knownRoute)=> window.location.hash === knownRoute) === undefined){
          window.location.hash = "#search"
     }
}

defaultRoute(); 

window.addEventListener("hashchange", defaultRoute);