
import HeaderCard from './Components/HeaderCards';
const labels = {
  todo: '#00C2E2',
  inprogress: '#F3D800',
  done: "#5DBF48"
}


function App() {
  return (
    <div className="App bg-[#345ce0] h-[100vh]">
      <MainContainer />
      {/* <HeaderCard text={"To Do"} color={"#00C2E2"} /> */}
      {/* <HeaderCard text={"In Progress"} color={"sky-400"} />
      <HeaderCard text={"Done"} color={"green-400"} /> */}
    </div>
  );
}

export default App;


function MainContainer() {

  const staticContainer = [
    {
      name: "To Do", cardsArray: [
        {
          title: "My First Task", label: labels.todo, date: new Date()
        },
        {
          title: "My Second Task", label: labels.todo, date: new Date()
        },
        {
          title: "My Third Task", label: labels.todo, date: new Date()
        }
      ]
    },
    {
      name: "In Progress", cards: 0, cardsArray: []
    },
    { name: "Completed", cards: 0, cardsArray: [] }
  ]

  return (
    <div className='mx-[5%] py-[5%] flex'>
      {staticContainer.map(container => <CardContainer containerName={container.name} cards={container?.cardsArray?.length} cardArrray={container.cardsArray} />)}
    </div>
  )
}


function CardContainer(props) {
  return (
    <div className='w-[339px] bg-[#E3E4E6] rounded-[5px] mx-[1%]'>
      <CardContainerHeader containerName={props.containerName} />
      {props.cards === 0 && <div> No Cards Available</div>}
      {props.cards > 0 &&
        props.cardArrray.map(card => <HeaderCard text={card.title} color={card.label} />)
      }
    </div>
  )
}

function CardContainerHeader(props) {
  return (
    <div className='flex items-center justify-center font-bold text-[30px] text-[#40506C] font-["Roboto"] font-bold '>{props.containerName}</div>
  )
}