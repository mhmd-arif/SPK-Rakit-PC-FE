import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#b8d0db',
      200: '#33006d',
      800: '#1a0044',
    }
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
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
