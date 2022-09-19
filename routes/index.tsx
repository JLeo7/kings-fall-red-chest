import Counter from "../islands/Counter.tsx";
import IconButton from '../components/IconButton.tsx';

export default function Home() {
  const iconList = [
    '/assets/icon-1.png',
    '/assets/icon-2.png',
    '/assets/icon-3.png',
    '/assets/icon-4.png',
    '/assets/icon-5.png',
    '/assets/icon-6.png',
    '/assets/icon-7.png',
    '/assets/icon-8.png',
    '/assets/icon-9.png',
  ];
  
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <p class="my-6">
        Choose the three symbols
      </p>
      <div class="grid grid-cols-3 gap-8">
      {iconList.map(icon => <IconButton key={icon} iconUrl={icon} handleSetIcon={()=>console.log('icon: ',icon)} />
      )}
      </div>
      
      <Counter start={3} />
    </div>
  );
}
