import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <div className='bg-white'>
        <div className=''>
          <div className=''>
            <Outlet />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
