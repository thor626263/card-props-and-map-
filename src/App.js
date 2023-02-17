import React from 'react';
import Card from './Card';
import './Card.css';
import People from './People';


function App() {
 
  return (
    <div class='fir'>
    <dl class="arrange-horizontally">{ People.map((Peopl) =>(
   <Card
  key={Peopl.id}
  image={Peopl.image}
  name={Peopl.name}
  city={Peopl.city}
/>
) )}</dl>
    </div>
  );
}

export default App;












// let modifiedArr = People.map(function(Peopl){
//   return (<Card
//   key={Peopl.id}
//   image={Peopl.image}
//   name={Peopl.name}
//   city={Peopl.city}
// />)
// } );



// function createEntry(Peopl) {
//   return (
//     <Card
//       key={Peopl.id}
//       image={Peopl.image}
//       name={Peopl.name}
//       city={Peopl.city}
//     />
//   );
// }



{/* <Card
image="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png"
name={name[1]}
city={city[1]}
/>
<Card
image="https://b.fssta.com/uploads/application/soccer/headshots/711.png"
name={name[2]}
city={city[2]}
/>
<Card
image="https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.34.png"
name={name[3]}
city={city[3]}
/>
<Card
image="https://th.bing.com/th/id/OIP.kixEMNCzwMG0bX_4hUm4HgAAAA?pid=ImgDet&w=360&h=360&rs=1"
name={name[4]}
city={city[4]}
/>
<Card
image="https://b.fssta.com/uploads/application/soccer/headshots/40554.vresize.350.350.medium.9.png"
name={name[5]}
city={city[5]}
/> */}